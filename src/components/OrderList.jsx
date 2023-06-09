import { useContext } from 'react';

import {
   Card,
   CardBody,
   Heading,
   Image,
   List,
   ListItem,
   NumberDecrementStepper,
   NumberIncrementStepper,
   NumberInput,
   NumberInputField,
   NumberInputStepper,
   Stack,
   Text,
} from '@chakra-ui/react';

import { DeliveryContext } from '../App';
import EmptyList from './EmptyList';

const OrderList = () => {
   const { setOrderList, orderList } = useContext(
      DeliveryContext,
   );

   const onChange = (e, product) => {
      if (e === '0') {
         const index = orderList.findIndex(
            (elem) => product._id === elem._id,
         );
         orderList.splice(index, 1);
         setOrderList(() => [...orderList]);
      } else {
         const index = orderList.findIndex(
            (elem) => product._id === elem._id,
         );
         orderList[index].number = e;
         setOrderList(() => [...orderList]);
      }
   };

   return (
      <>
         <List spacing={10}>
            {orderList.length !== 0 ? (
               orderList.map((i) => (
                  <ListItem key={i._id}>
                     <Card
                        w="80%"
                        mx="auto"
                     >
                        <CardBody
                           display="flex"
                           gap="15px"
                        >
                           <Image
                              src={i.image}
                              alt="Green double couch with wooden legs"
                              borderRadius="lg"
                              w="60%"
                           />
                           <Stack
                              mt="6"
                              spacing="3"
                           >
                              <Heading size="md">
                                 {i.dishName}
                              </Heading>
                              <Text
                                 color="blue.600"
                                 fontSize="2xl"
                              >
                                 {i.price}
                              </Text>
                              <NumberInput
                                 defaultValue={
                                    i.number
                                 }
                                 min={0}
                                 max={i.quantity}
                                 onChange={(
                                    e,
                                 ) => {
                                    onChange(
                                       e,
                                       i,
                                    );
                                 }}
                              >
                                 <NumberInputField />
                                 <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                 </NumberInputStepper>
                              </NumberInput>
                           </Stack>
                        </CardBody>
                     </Card>
                  </ListItem>
               ))
            ) : (
               <EmptyList />
            )}
         </List>
      </>
   );
};
export default OrderList;
