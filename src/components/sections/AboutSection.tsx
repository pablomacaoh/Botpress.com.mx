
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="py-24 bg-bot-darkBg/60 border-y border-gray-800" id="about">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="bg-muted/40 border border-gray-700 p-6 rounded-xl relative z-10">
                <div className="grid grid-cols-2 gap-5">
                  <div className="col-span-2 bg-indigo-900/20 border border-indigo-500/20 rounded-lg p-6">
                    <h3 className="font-bold text-lg text-indigo-300 mb-2">Misión de la Empresa</h3>
                    <p className="text-gray-300">
                      Democratizar la IA para empresas de todos los tamaños a través de tecnología accesible de bots de WhatsApp.
                    </p>
                  </div>
                  
                  <div className="bg-blue-900/20 border border-blue-500/20 rounded-lg p-6">
                    <h4 className="font-medium text-blue-300 mb-2">Fundada</h4>
                    <p className="text-3xl font-bold text-white">2021</p>
                  </div>
                  
                  <div className="bg-green-900/20 border border-green-500/20 rounded-lg p-6">
                    <h4 className="font-medium text-green-300 mb-2">Clientes</h4>
                    <p className="text-3xl font-bold text-white">1,000+</p>
                  </div>
                  
                  <div className="bg-amber-900/20 border border-amber-500/20 rounded-lg p-6">
                    <h4 className="font-medium text-amber-300 mb-2">Países</h4>
                    <p className="text-3xl font-bold text-white">30+</p>
                  </div>
                  
                  <div className="bg-purple-900/20 border border-purple-500/20 rounded-lg p-6">
                    <h4 className="font-medium text-purple-300 mb-2">Tamaño del Equipo</h4>
                    <p className="text-3xl font-bold text-white">50+</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 -top-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-full filter blur-xl"></div>
              <div className="absolute -z-10 -bottom-6 -right-6 w-32 h-32 bg-purple-500/10 rounded-full filter blur-xl"></div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="section-heading">Sobre WhatsBot AI</h2>
            <p className="text-lg text-gray-300 mb-6">
              Fundada en 2021, WhatsBot AI ha crecido rápidamente hasta convertirse en un proveedor líder de soluciones inteligentes de bots para WhatsApp que ayudan a las empresas a transformar sus estrategias de participación con los clientes.
            </p>
            
            <p className="text-lg text-gray-300 mb-6">
              Nuestro diverso equipo de expertos en IA, desarrolladores y estrategas empresariales están unidos por un objetivo común: hacer que la IA conversacional sea accesible para todos. Creemos que cada empresa, independientemente de su tamaño, debe tener acceso a herramientas poderosas que mejoren las experiencias de los clientes.
            </p>
            
            <p className="text-lg text-gray-300 mb-8">
              Con clientes que van desde pequeñas empresas locales hasta empresas globales en más de 30 países, estamos orgullosos del impacto que nuestra tecnología ha tenido en revolucionar la forma en que las empresas interactúan con sus clientes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="primary-button">
                Conoce Nuestro Equipo
              </Button>
              
              <Button className="secondary-button">
                Nuestros Valores
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
