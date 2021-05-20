import React from "react";
import getHobby from "../lib/getHobby"

const Hobby = ({data}) => {
	return data[0].fields.Content;
}

export async function getServerSideProps(context) {
	const data = await getHobby(context.query.hname);
	return { props: { data } }
  }

export default Hobby;	

// IMPORTANT!!! Figure out async issues with calling getHobby and returning returned value