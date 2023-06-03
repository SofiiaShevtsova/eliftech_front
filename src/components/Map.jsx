import { Center } from "@chakra-ui/react";

const Map = () => {
  return (
    <Center w="100%" h="35%" my="20px">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d274450.6497260677!2d11.596580418800349!3d48.134840853450434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sde!4v1603744450305!5m2!1sen!2sde"
        width="90%"
        height="100%"
        frameborder="0"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
        title="Map"
      ></iframe>
    </Center>
  );
};

export default Map;