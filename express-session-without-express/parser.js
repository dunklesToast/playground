/*!
 * cookie-parser
 * Copyright(c) 2014 TJ Holowaychuk
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */

'use strict'

/**
 * Module dependencies.
 * @private
 */

var cookie = require('cookie')
var signature = require('cookie-signature')

/**
 * Module exports.
 * @public
 */

module.exports = cookieParser
module.exports.JSONCookie = JSONCookie
module.exports.JSONCookies = JSONCookies
module.exports.signedCookie = signedCookie
module.exports.signedCookies = signedCookies

/**
 * Parse Cookie header and populate `req.cookies`
 * with an object keyed by the cookie names.
 *
 * @param {string} [secret] A string (or array of strings) representing cookie signing secret(s).
 * @param {Object} [options]
 * @return {Function}
 * @public
 */

function cookieParser (secret, options) {
    return function cookieParser (cookies) {
        let cookiesObj = Object.create(null)
        let signedCookiesObj = Object.create(null)

        // no cookies
        if (!cookies) {
            console.log('no cookies.')
            return;
        }

        cookiesObj = cookie.parse(cookies, options)

        // parse signed cookies
        if (secret) {
            signedCookiesObj = signedCookies(cookiesObj, secret)
            signedCookiesObj = JSONCookies(signedCookies);
            console.log('signed!')
        }


        // parse JSON cookies
        cookies = JSONCookies(cookiesObj)
        console.log(cookies);
    }
}

/**
 * Parse JSON cookie string.
 *
 * @param {String} str
 * @return {Object} Parsed object or undefined if not json cookie
 * @public
 */

function JSONCookie (str) {
    if (typeof str !== 'string' || str.substr(0, 2) !== 'j:') {
        return undefined
    }

    try {
        return JSON.parse(str.slice(2))
    } catch (err) {
        return undefined
    }
}

/**
 * Parse JSON cookies.
 *
 * @param {Object} obj
 * @return {Object}
 * @public
 */

function JSONCookies (obj) {
    var cookies = Object.keys(obj)
    var key
    var val

    for (var i = 0; i < cookies.length; i++) {
        key = cookies[i]
        val = JSONCookie(obj[key])

        if (val) {
            obj[key] = val
        }
    }

    return obj
}

/**
 * Parse a signed cookie string, return the decoded value.
 *
 * @param {String} str signed cookie string
 * @param {string} secret
 * @return {String} decoded value
 * @public
 */

function signedCookie (str, secret) {
    if (typeof str !== 'string') {
        return undefined
    }

    if (str.substr(0, 2) !== 's:') {
        return str
    }

    var secrets = !secret || Array.isArray(secret)
        ? (secret || [])
        : [secret]

    for (var i = 0; i < secrets.length; i++) {
        var val = signature.unsign(str.slice(2), secrets[i])

        if (val !== false) {
            return val
        }
    }

    return false
}

/**
 * Parse signed cookies, returning an object containing the decoded key/value
 * pairs, while removing the signed key from obj.
 *
 * @param {Object} obj
 * @param {string} secret
 * @return {Object}
 * @public
 */

function signedCookies (obj, secret) {
    var cookies = Object.keys(obj)
    var dec
    var key
    var ret = Object.create(null)
    var val
    for (var i = 0; i < cookies.length; i++) {
        key = cookies[i]
        val = obj[key]
        dec = signedCookie(val, secret)

        if (val !== dec) {
            ret[key] = dec
            delete obj[key]
        }
    }
    return ret
}

const input = 'connect.sid=s%3AISVZBWxMjIr428Su5rORu0sIOnm1OF2E.XxyYJPQf7xBDC21BoiGyIKzQOPKQpnEKuUR3zU6bGcs';
const parser = cookieParser('IM is on a secret mission');
parser(input)
