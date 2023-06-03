import {
  Flex,
  Card,
  CardBody,
  CardFooter,
  Image,
  Button,
  Text,
  Heading,
  Divider,
  ButtonGroup,
  Spacer,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { DeliveryContext } from "../App";
import EmptyList from "./EmptyList";

const Products = () => {
  const { id } = useParams();
  const [productsList, setProductsList] = useState([]);
  const { setOrderList, orderList } = useContext(DeliveryContext);
  const toast = useToast();

  const onClick = (product) => {
    const index = orderList.findIndex((i) => product._id === i._id);
    if (index === -1) {
      setOrderList((prev) => [...prev, { ...product, number: 1 }]);
    } else {
      orderList[index].number = +orderList[index].number + 1;
      setOrderList(() => [...orderList]);
    }
    toast({
      title: "Add to order.",
      status: "success",
      duration: 4000,
      isClosable: true,
      position: "top",
      variant: "subtle",
    });
  };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:4000/api/products/${id}`
        );
        setProductsList(data);
      } catch (error) {}
    })();
  }, [id]);

  return (
    <Flex flexWrap="wrap" gap="50px" p="20px" justify="center">
      {productsList.length !== 0 ? (
        productsList.map((i) => (
          <Card key={i._id} width="40%">
            <CardBody>
              <Image
                src={i.image}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Flex mt="6">
                <Heading size="md">{i.dishName}</Heading>
                <Spacer />
                <Text
                  color="blue.600"
                  fontSize="2xl"
                  borderRadius="50%"
                  bg="rgba(255,255,255,0.5)"
                  px="5px"
                >
                  {i.price}
                </Text>
              </Flex>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                {/* <Button
                      variant="solid"
                      colorScheme="blue"
                    onClick={() => {
                      onClick(i);
                      }}
                    >
                      Buy now
                    </Button> */}
                <Button
                  variant="solid"
                  colorScheme="blue"
                  onClick={() => {
                    onClick(i);
                  }}
                >
                  Add to cart
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))
      ) : (
        <EmptyList />
      )}
    </Flex>
  );
};

export default Products;
