
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative pt-20 pb-32">
      {/* Grid background effect */}
      <div className="absolute inset-0 -z-10 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      {/* Additional subtle grid lines */}
      <div className="absolute inset-0 -z-10 bg-grid-lines"></div>

      <div className="container mx-auto px-4">
        {/* Banner */}
        <div className="flex justify-center mb-12">
          <div className="highlight-banner">
            La forma más fácil de crear bots de WhatsApp impulsados por IA
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <h1 className="hero-text">
            La Plataforma Completa <br />
            de WhatsApp AI
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            WhatsBot AI es una plataforma todo en uno para crear bots de WhatsApp impulsados por IA. Cree interacciones con clientes más inteligentes y eficientes con los últimos modelos de lenguaje.
          </p>

          <div className="flex flex-col gap-6 max-w-4xl mx-auto">
            {/* Example 1 - Schedule Appointment */}
            <div className="relative">
              <div className="p-2 bg-muted/50 rounded-xl overflow-hidden border border-gray-700 h-full">
                <div className="bg-muted/70 rounded-lg p-4 h-full">
                  <div className="bg-muted rounded-lg p-4 shadow-md">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium text-white">Asistente de Citas</div>
                        <p className="text-gray-300 text-sm mt-1">
                          ¡Hola! Soy el asistente de citas de la Dra. Martínez. ¿Te gustaría agendar una consulta?
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 ml-12">
                      <div className="bg-gray-700/50 rounded-lg p-3 inline-block mb-2">
                        <p className="text-gray-200 text-sm">
                          Sí, necesito una cita para el próximo jueves
                        </p>
                      </div>

                      <div className="flex items-start gap-3 mt-3">
                        <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium text-white">Asistente de Citas</div>
                          <p className="text-gray-300 text-sm mt-1">
                            Perfecto. El jueves tenemos disponibilidad a las 10:00, 14:30 y 16:00 hrs. ¿Cuál horario prefieres?
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex gap-2">
                    <div className="flex-1 bg-muted/80 rounded-lg p-2 shadow-sm flex items-center border border-gray-700">
                      <input type="text" className="w-full bg-transparent border-0 focus:outline-none text-sm text-gray-300" placeholder="Escribe un mensaje..." />
                    </div>
                    <button className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center text-white">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -z-10 -top-4 -left-4 w-24 h-24 bg-blue-500/10 rounded-full filter blur-xl"></div>
              <div className="absolute -z-10 -bottom-4 -right-4 w-24 h-24 bg-indigo-500/10 rounded-full filter blur-xl"></div>
            </div>

            {/* Example 2 - Product Sales */}
            <div className="relative">
              <div className="p-2 bg-muted/50 rounded-xl overflow-hidden border border-gray-700 h-full">
                <div className="bg-muted/70 rounded-lg p-4 h-full">
                  <div className="bg-muted rounded-lg p-4 shadow-md">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium text-white">Asistente de Ventas</div>
                        <p className="text-gray-300 text-sm mt-1">
                          ¡Hola! Soy tu asistente personal de TechMaster. ¿En qué puedo ayudarte hoy?
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 ml-12">
                      <div className="bg-gray-700/50 rounded-lg p-3 inline-block mb-2">
                        <p className="text-gray-200 text-sm">
                          Busco un smartphone con buena cámara por menos de $8,000
                        </p>
                      </div>

                      <div className="flex items-start gap-3 mt-3">
                        <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium text-white">Asistente de Ventas</div>
                          <p className="text-gray-300 text-sm mt-1">
                            Tenemos el TechMaster X3 a $7,499 con cámara de 48MP y gran angular. También el ZenPhone a $6,999 con estabilizador óptico. ¿Cuál te gustaría conocer más?
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex gap-2">
                    <div className="flex-1 bg-muted/80 rounded-lg p-2 shadow-sm flex items-center border border-gray-700">
                      <input type="text" className="w-full bg-transparent border-0 focus:outline-none text-sm text-gray-300" placeholder="Escribe un mensaje..." />
                    </div>
                    <button className="w-10 h-10 rounded-lg bg-purple-500 flex items-center justify-center text-white">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -z-10 -top-4 -left-4 w-24 h-24 bg-purple-500/10 rounded-full filter blur-xl"></div>
              <div className="absolute -z-10 -bottom-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full filter blur-xl"></div>
            </div>

            {/* Example 3 - Customer Support */}
            <div className="relative">
              <div className="p-2 bg-muted/50 rounded-xl overflow-hidden border border-gray-700 h-full">
                <div className="bg-muted/70 rounded-lg p-4 h-full">
                  <div className="bg-muted rounded-lg p-4 shadow-md">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-white">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium text-white">Asistente de Soporte</div>
                        <p className="text-gray-300 text-sm mt-1">
                          ¡Hola! Soy el soporte técnico de TechSolutions. ¿En qué puedo ayudarte?
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 ml-12">
                      <div className="bg-gray-700/50 rounded-lg p-3 inline-block mb-2">
                        <p className="text-gray-200 text-sm">
                          Mi software no se inicia después de la actualización
                        </p>
                      </div>

                      <div className="flex items-start gap-3 mt-3">
                        <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-white">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium text-white">Asistente de Soporte</div>
                          <p className="text-gray-300 text-sm mt-1">
                            Lamento escuchar eso. Vamos a solucionarlo. ¿Podrías reiniciar tu computadora en modo seguro y luego ejecutar nuestro asistente de reparación?
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex gap-2">
                    <div className="flex-1 bg-muted/80 rounded-lg p-2 shadow-sm flex items-center border border-gray-700">
                      <input type="text" className="w-full bg-transparent border-0 focus:outline-none text-sm text-gray-300" placeholder="Escribe un mensaje..." />
                    </div>
                    <button className="w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center text-white">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -z-10 -top-4 -left-4 w-24 h-24 bg-amber-500/10 rounded-full filter blur-xl"></div>
              <div className="absolute -z-10 -bottom-4 -right-4 w-24 h-24 bg-green-500/10 rounded-full filter blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
