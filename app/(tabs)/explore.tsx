import { useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";

export default function TabTwoScreen() {
  const [selectable, setSelectable] = useState(false);

  // Workaround to issue
  useEffect(() => {
    setTimeout(() => {
      setSelectable(true);
    }, 100);
  }, []);

  return (
    <Text selectable={selectable} style={{ margin: 20 }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor arcu
      at pretium porttitor. In iaculis mollis diam dignissim venenatis. Praesent
      tincidunt ligula vitae lacus lacinia sagittis. Praesent mattis odio non
      posuere feugiat. Duis turpis tellus, dictum eu scelerisque eu, semper a
      ipsum. Sed et mi nibh. Aliquam dignissim nunc vel augue malesuada rutrum.
      Mauris vehicula pharetra ligula, in euismod tortor suscipit eu. Fusce
      vitae metus eu magna vulputate dapibus. Sed vel nisl convallis, dictum
      ante nec, venenatis est. Nullam sit amet dui congue, aliquam odio id,
      volutpat nunc. Fusce accumsan congue tellus, pellentesque maximus purus
      convallis vel. Proin euismod lobortis neque eget pretium. Donec eu est sit
      amet libero faucibus egestas. Nam consequat pharetra massa consectetur
      mattis. Morbi orci nibh, facilisis id diam non, molestie aliquet sapien.
      Quisque eu nulla id diam condimentum faucibus eget in felis. Aliquam
      commodo, odio luctus blandit ultrices, lectus leo vehicula odio, quis
      hendrerit urna tortor et elit. Maecenas sed sagittis felis. Pellentesque
      vulputate neque vitae leo fermentum, ut fermentum ante vulputate. Maecenas
      lectus lectus, gravida sit amet sem in, pellentesque suscipit felis.
      Vestibulum pulvinar lobortis ante sed congue. Integer purus eros,
      hendrerit ut massa eget, elementum sollicitudin tellus. Nulla facilisi.
      Nulla ornare diam at nibh ornare volutpat. Maecenas libero augue, placerat
      ut ultricies id, elementum sit amet odio. Sed risus massa, placerat at
      auctor sed, placerat non nisi. Donec eu rhoncus elit, eget luctus nunc.
      Sed pellentesque venenatis iaculis. Proin vel cursus enim. Cras lacinia
      sapien quis sodales sagittis. Aliquam porttitor velit diam, a vehicula
      mauris dapibus a. Mauris ut lobortis metus. Quisque tempor gravida nunc.
      Curabitur vitae felis ullamcorper, egestas enim id, dictum quam. Sed
      mattis eget eros quis pretium. Cras egestas vulputate ante, ullamcorper
      dignissim risus lobortis sit amet. Nullam accumsan luctus auctor. Ut
      iaculis mauris nec tellus dictum sagittis. Quisque velit urna, iaculis
      euismod congue eleifend, elementum vel ligula. Aenean tempor hendrerit
      mauris in facilisis. Duis eros mi, posuere et porta scelerisque, tincidunt
      at dui. Fusce enim ipsum, tincidunt ut nunc eget, molestie lobortis odio.
      Aliquam ipsum eros, aliquet sit amet ante luctus, dignissim pretium elit.
      Proin quis sem molestie quam dignissim faucibus eu ut urna. Morbi
      vestibulum enim in nisi sodales mattis. Integer condimentum, enim vel
      rhoncus sodales, augue elit finibus ligula, nec facilisis arcu magna in
      lorem. Sed ornare, quam fringilla ornare ultricies, enim dolor pharetra
      est, eget volutpat augue nisi sit amet odio. Morbi laoreet placerat
      molestie. Curabitur eget mi sit amet sapien tincidunt fermentum et vel mi.
      Proin feugiat congue lacus, faucibus ultricies turpis finibus ac.
      Suspendisse eleifend augue tristique volutpat elementum. Proin vitae ex
      fermentum, hendrerit augue a, lobortis ipsum. In eu molestie leo. Nunc
      dictum pretium varius. Mauris id nisl vitae purus facilisis volutpat nec
      nec sem. Suspendisse ut enim posuere ligula consequat malesuada a ut nibh.
    </Text>
  );
}
