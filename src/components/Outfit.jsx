
const callouts = [
    {
      name: 'Klik gambar untuk melihat lebih detail',
      description: 'Jaket Gorpcore',
      imageSrc: 'https://down-id.img.susercontent.com/file/id-11134208-7r992-lvo329vyxais63',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: 'https://www.blibli.com/p/antarestar-official-jaket-gunung-pria-wanita-aether-series-hitam-xl/ps--LAH-70107-39695',
    },
    {
      name: 'Klik gambar untuk melihat lebih detail',
      description: 'Celana Kamerun',
      imageSrc: 'https://cf.shopee.co.id/file/sg-11134201-23010-mtglzkt2thmv8b',
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwholesale.desty.app%2Fantarestar%2F28178703912173568&psig=AOvVaw196UmRyWjmYF55UaydOhTa&ust=1728832198470000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCKisg_6PiYkDFQAAAAAdAAAAABAu',
    },
    {
      name: 'Klik gambar untuk melihat lebih detail',
      description: 'Sepatu Gunung',
      imageSrc: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2023/3/8/70ecfbd6-d0f8-43ca-9010-cbb0d173bb6c.jpg',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: 'https://www.tokopedia.com/divaclothesgood/sepatu-gunung-antarestar-pria-wanita-sepatu-hiking-camping-outdoor?extParam=ivf%3Dfalse%26keyword%3Dsepatu+gunung+outdoor%26src%3Dsearch',
    },
    {
      name: 'Klik gambar untuk melihat lebih detail',
      description: 'Tas Gunung',
      imageSrc: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2023/5/30/2c94ef03-864c-428d-94ea-f484dcca2af2.png',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: 'https://www.tokopedia.com/divaclothesgood/sepatu-gunung-antarestar-pria-wanita-sepatu-hiking-camping-outdoor?extParam=ivf%3Dfalse%26keyword%3Dsepatu+gunung+outdoor%26src%3Dsearch',
    },
    {
      name: 'Klik gambar untuk melihat lebih detail',
      description: 'Tracking Pole (Opsional)',
      imageSrc: 'https://antarestar.com/wp-content/uploads/2022/01/TRACKING-POLE-MALL-5.png',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: 'https://www.tokopedia.com/divaclothesgood/sepatu-gunung-antarestar-pria-wanita-sepatu-hiking-camping-outdoor?extParam=ivf%3Dfalse%26keyword%3Dsepatu+gunung+outdoor%26src%3Dsearch',
    },
    {
      name: 'Klik gambar untuk melihat lebih detail',
      description: 'Cyberpunk Gorpcore Gray Glasses',
      imageSrc: 'https://laz-img-sg.alicdn.com/p/520e7b7face575f2c0787db30f88a50a.jpg',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: 'https://shopee.co.id/Kacamata-Cyberpunk-Luxury-Justin-Bieber-Kacamata-Gaya-Hip-Hop-Gangsta-Kacamata-Gorpcore-i.1096795443.16196401359',
    },
  ]
  
  export default function Outfit() {
    return (
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">Outfit Viral On Tiktok</h2>
  
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                    <div className="mt-10">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    
                    <img
                      alt={callout.imageAlt}
                      src={callout.imageSrc}
                      className="h-full w-full object-cover object-center"
                      href=""
                    />
                    </div>
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-[100px]">Coming Soon...</h2>
           
          </div>
        </div>
      </div>
    )
  }
  