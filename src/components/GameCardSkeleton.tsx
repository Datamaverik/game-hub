import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card width='250px'>
      <Skeleton height='200px' borderRadius={10} overflow={"hidden"}></Skeleton>
      <CardBody>
        <SkeletonText/>
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
