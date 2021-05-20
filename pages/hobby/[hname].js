import React from "react";
import Error from 'next/error'
import getHobby from "../lib/getHobby"

const Hobby = ({data}) => {
	if(data.length==0){
		return <Error statusCode={404} />
	} else {
		return data[0].fields.Content;
	}
		
}

export async function getServerSideProps(context) {
	const data = await getHobby(context.query.hname);
	//move 404 handling here
	return { props: { data } }
}

export default Hobby;	