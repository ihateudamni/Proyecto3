import ProductCard from '/components/ProductCard';

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Catalogo de Camisetas Panchi</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <ProductCard
          title="Camiseta #1"
          description="Camiseta personalizable a tu elección. Ultimas unidades."
          price={19.99}
          imageUrl="https://img.elo7.com.br/product/zoom/4862154/camiseta-roblox-modelo-05-emporium.jpg"
        />
        <ProductCard
          title="Camiseta #2"
          description="Camiseta personalizable a tu elección. Ultimas unidades."
          price={19.99}
          imageUrl="https://th.bing.com/th/id/OIP.J8kmVaFIIM99sL5UeKdvGAHaIX?cb=iwp2&rs=1&pid=ImgDetMain"//via.placeholder.com/150https://th.bing.com/th/id/OIP.J8kmVaFIIM99sL5UeKdvGAHaIX?cb=iwp2&rs=1&pid=ImgDetMain"
        />
      </div>
    </main>
  );
}