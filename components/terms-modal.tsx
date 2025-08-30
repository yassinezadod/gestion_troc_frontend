"use client"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TermsModalProps {
  isOpen: boolean
  onClose: () => void
}

export function TermsModal({ isOpen, onClose }: TermsModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-[80vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-900">Termes et Conditions</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[60vh]">
          <div className="space-y-4 text-sm text-gray-700">
            <section>
              <h3 className="font-semibold text-gray-900 mb-2">1. Acceptation des Conditions</h3>
              <p>
                En utilisant EcomTroc, vous acceptez d'être lié par ces termes et conditions. Si vous n'acceptez pas ces
                termes, veuillez ne pas utiliser notre service.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-gray-900 mb-2">2. Description du Service</h3>
              <p>
                EcomTroc est une plateforme de commerce électronique qui permet aux utilisateurs d'acheter, vendre et
                échanger des produits. Nous facilitons les transactions entre les utilisateurs mais ne sommes pas partie
                aux contrats de vente.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-gray-900 mb-2">3. Inscription et Compte</h3>
              <p>
                Pour utiliser certaines fonctionnalités, vous devez créer un compte. Vous êtes responsable de maintenir
                la confidentialité de vos informations de connexion et de toutes les activités qui se produisent sous
                votre compte.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-gray-900 mb-2">4. Règles de Conduite</h3>
              <p>
                Vous vous engagez à utiliser EcomTroc de manière légale et respectueuse. Il est interdit de publier du
                contenu offensant, trompeur ou illégal. Nous nous réservons le droit de suspendre ou supprimer les
                comptes qui violent ces règles.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-gray-900 mb-2">5. Transactions et Paiements</h3>
              <p>
                Les transactions entre utilisateurs sont régies par les termes convenus entre les parties. EcomTroc peut
                faciliter les paiements mais n'est pas responsable des litiges entre acheteurs et vendeurs.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-gray-900 mb-2">6. Propriété Intellectuelle</h3>
              <p>
                Le contenu de EcomTroc, y compris les textes, graphiques, logos et logiciels, est protégé par les droits
                d'auteur et autres droits de propriété intellectuelle.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-gray-900 mb-2">7. Limitation de Responsabilité</h3>
              <p>
                EcomTroc ne sera pas responsable des dommages directs, indirects, accessoires ou consécutifs résultant
                de l'utilisation de notre service.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-gray-900 mb-2">8. Modifications</h3>
              <p>
                Nous nous réservons le droit de modifier ces termes à tout moment. Les modifications prendront effet dès
                leur publication sur notre site.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-gray-900 mb-2">9. Contact</h3>
              <p>
                Pour toute question concernant ces termes et conditions, veuillez nous contacter à support@ecomtroc.com
              </p>
            </section>
          </div>
        </div>

        <div className=" border-t bg-gray-50">
          <Button onClick={onClose} className="w-full bg-blue-600 hover:bg-blue-700">
            J'ai lu et compris
          </Button>
        </div>
      </div>
    </div>
  )
}
