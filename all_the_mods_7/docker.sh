docker run -v $(PWD)/data:/data -v $(PWD)/packs:/modpacks \
    -e TYPE=CURSEFORGE \
    -e CF_SERVER_MOD=/modpacks/ATM7.zip \
    -p 25565:25565 -e EULA=TRUE itzg/minecraft-server
