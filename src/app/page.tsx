import { PizzaList } from "@/components/home/pizzaList";
import { Header } from "@/components/layout/Header";
import { api } from "@/lib/axios";

export default async function Page() {
  const pizzaReq = await api.get('/pizzas');
  const pizzas = await pizzaReq.data.pizzas ?? [];

  return (
    <div>
      <Header />
      <main className="container mx-auto mb-10">
        <PizzaList pizzas={pizzas} />
      </main>
    </div>
  );
}
