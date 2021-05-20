import React, {useEffect} from "react";
import { useRouter } from "next/router";
import getHobby from "../lib/getHobby"

const Hobby = ({data}) => {
	const router = useRouter();
	const { hname } = router.query;
	console.log(data);
	
	
	return "hello";
}

export async function getServerSideProps(context) {
	// Fetch data from external API
	const data = await getHobby(context.query.hname);
  
	// Pass data to the page via props
	return { props: { data } }
  }

export default Hobby;	

// IMPORTANT!!! Figure out async issues with calling getHobby and returning returned value