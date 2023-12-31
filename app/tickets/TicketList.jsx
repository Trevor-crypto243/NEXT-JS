import Link from "next/link"
async function getTickets(){
    //Imitate delay
    await new Promise(resolve => setTimeout(resolve, 3000))
    const response = await fetch('http://localhost:4000/tickets',{
        next:{
            revalidate: 30 //seconds 0 - to never cache
        }
    })

    return response.json()
}


export default async function TicketList(){
    const tickets = await getTickets()
    return(
        <div>

            {tickets.map((ticket)=>(
               <div key={ticket.id} className="card my-5">
                    <Link href={`/tickets/${ticket.id}`}>
                    <h3>{ticket.title}</h3>
                    <p>{ticket.body.slice(0,200)}...</p>
                    <div className={`pill ${ticket.priority}`}>
                        {ticket.priority} priority
                    </div>
                    </Link>
               </div> 
            ))}
            {tickets.length === 0 && (
                <p>There are no open tickets,  </p>
            )}
        </div>
    )
}

