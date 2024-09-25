import { cookies,headers } from 'next/headers'

export async function GET() {

const cookieStore = cookies();
  const themecookie = cookieStore.get('authToken')
  console.log("theme",themecookie);
    const data=[{
        title:"watch",
        price:"45"
    }]
    return Response.json({ data })
  }

  export async function POST(request:Request) {
    const headersList = headers();
  
console.log('Authorization',headersList.get('Authorization'));
    const prod=await request.json();
    const data=[{
        title:"watch",
        price:"45",
        prod:prod
    }]
    return Response.json({ data })
  }