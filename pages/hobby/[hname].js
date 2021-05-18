import React from "react";
import { useRouter } from "next/router";
import getHobby from "../lib/getHobby"

const Hobby = () => {
	const router = useRouter();
	const { hname } = router.query;
	// getHobby(hname).then(ret => {
	// 	console.log(ret)
	// }).catch(err => {
	// 	console.log(err)
	// });
	return `hobby ${hname}`;
}

export default Hobby;	

// IMPORTANT!!! Figure out async issues with calling getHobby and returning returned value