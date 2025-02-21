import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useCartStore } from '@/store/cartStore'

export default function OrderSummary() {
  const router = useRouter()
  const clearCart = useCartStore(state => state.clearCart)
  const { status } = router.query

  useEffect(() => {
    if (status === 'success') {
      clearCart()
    }
  }, [status, clearCart])

  return (
    <div className="min-h-screen bg-amber-50 py-12">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-amber-900 mb-6">
            {status === 'success' 
              ? '¡Pedido Realizado con Éxito!' 
              : 'Estado del Pedido'}
          </h1>
          
          {status === 'success' ? (
            <div className="space-y-4">
              <p className="text-gray-700">
                Tu pedido ha sido recibido y está siendo procesado.
              </p>
              <p className="text-gray-700">
                Te hemos enviado un correo con los detalles de tu pedido.
              </p>
              <button
                onClick={() => router.push('/menu')}
                className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-full
                transition-all duration-300"
              >
                Volver al Menú
              </button>
            </div>
          ) : (
            <div className="text-red-600">
              <p>Ha ocurrido un error al procesar tu pedido.</p>
              <p>Por favor, intenta nuevamente o contáctanos directamente.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
