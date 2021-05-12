import React from "react";
import { useRouter } from "next/router";
import getHobby from "../lib/getHobby"

const Hobby = () => {
	const router = useRouter();
	const { hname } = router.query;
	console.log(process.env.AIRTABLE_BASE_ID)
	getHobby()
	return <p>Hobby Name: {hname}</p>;
}

export default Hobby;
