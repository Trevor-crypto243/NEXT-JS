import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h2>Dash Board</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse deserunt atque explicabo iste, debitis eos suscipit earum nisi odio iure?</p>

      <div className="flex justify-center my-8">
        <Link href="/tickets">
          <button className="btn-primary">View Tickets</button>
        </Link>
      </div>

      <h2>Company Updates</h2>

      <div className="card">
        <h3>New Member Of the Web dev team ...</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus ab cum fugiat debitis dolorum neque, quod temporibus inventore praesentium.</p>
      </div>

      <div className="card">
        <h3>New Member Of the Web dev team ...</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus ab cum fugiat debitis dolorum neque, quod temporibus inventore praesentium.</p>
      </div>
    </main>
  )
}
