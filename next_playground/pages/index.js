import Picker from "react-giphy-picker/lib/Picker";

export default function Home() {

  const onSelect = (gif) => {
    alert(gif);
  }

  return (
      <Picker onSelected={onSelect} />
  )
}
