import React from "react";
import { useRouter } from "next/router";

const Hobby = () => {
	const router = useRouter();
	const { hname } = router.query;

	return <p>Hobby Name: {hname}</p>;
};

export default Hobby;
