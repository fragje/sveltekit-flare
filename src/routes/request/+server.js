import { json } from "@sveltejs/kit";

export async function GET({platform}) {
  const { results } = await platform.env.DB_FLARE.prepare(
    "SELECT * FROM Customers WHERE CompanyName = ?"
  )
    .bind("Bs Beverages")
    .all();
  // console.log(props);

  //   console.log(results)
  // const data = await ps.first();
  // const test = 'hello world';

  return json(results);
}
