import { Suspense } from "react";
import Loading from "../loading"
import TicketList from "./TicketList";
export default function Tickets(){
    return(
        <main>
            <nav>
                <h2>Tickets</h2>
                <p><small>Currently Open Tickets</small></p>                
            </nav>
            <Suspense fallback={<Loading/>}>
                <TicketList/>
            </Suspense>
        </main>
    )
}