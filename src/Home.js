import React from 'react'
import { useNavigate } from 'react-router-dom'
import From from './From'
import Submited from './Submited';



function Home() {
    const navigate = useNavigate();
    const handleclick = () => {
        navigate(<Submited />);
    }
    
   
    
  return (
    <div>
         <div class="flex justify-center">
   <div class="flex flex-col md:flex-row max-w-7xl justify-center items-center ">
       <div
           class="bg-white m-4 shadow-xl min-h-96 flex flex-col justify-center text-black hover:border-t-8 hover:border-r-8 hover:border-yellow-500 rounded-lg transition duration-400 ease-in">
           <div class="m-8 h-96">
               <div class=" m-2">Silver</div>
               <div class=" m-2 text-3xl">TEXT AD</div>
               <div class=" m-2 mt-8">For Freelancers</div>
               <div class="flex">
                   <ion-icon name="checkmark-circle-outline" class="m-1 text-green-500"></ion-icon>
                   <div class=""></div>
               </div>
               <div class="flex">
                   <ion-icon name="checkmark-circle-outline" class="m-1 text-green-500"></ion-icon>
                   <div class=""></div>
               </div>
               <div class="flex">
                   <ion-icon name="checkmark-circle-outline" class="m-1 text-yellow-500"></ion-icon>
                   <div class=""></div>
               </div>
               <div class="flex">
                   <ion-icon name="checkmark-circle-outline" class="m-1 text-yellow-500"></ion-icon>
                   <div class=""></div>
               </div>
               <div class="flex">
                   <ion-icon name="close-circle-outline" class="m-1 text-red-500"></ion-icon>
                   <div class=""></div>
               </div>
           </div>
           <div class="flex justify-center">
            
               <div
                   class="bg-stone-900 text-white cursor-pointer m-4 px-8 py-1 rounded-2xl hover:bg-white hover:text-stone-900 font-medium" onClick={handleclick}>
                   Subscribe</div>

            
                </div>
       </div>
       {/* <div
           class="bg-white m-4 shadow-xl min-h-96 flex flex-col justify-center text-black hover:border-t-8 hover:border-r-8 hover:border-pink-500 rounded-lg transition duration-400 ease-in">
           <div class="m-8 h-96">
               <div class=" m-2">Gold</div>
               <div class=" m-2 text-3xl">$9.99/Mo</div>
               <div class=" m-2 mt-8">For Freelancers</div>
               <div class="flex">
                   <ion-icon name="checkmark-circle-outline" class="m-1 text-green-500"></ion-icon>
                   <div class="">10 websites</div>
               </div>
               <div class="flex">
                   <ion-icon name="checkmark-circle-outline" class="m-1 text-green-500"></ion-icon>
                   <div class="">100 GB Storage</div>
               </div>
               <div class="flex">
                   <ion-icon name="checkmark-circle-outline" class="m-1 text-green-500"></ion-icon>
                   <div class="">Unlimited Databases</div>
               </div>
               <div class="flex">
                   <ion-icon name="checkmark-circle-outline" class="m-1 text-yellow-500"></ion-icon>
                   <div class="">~25,000 Visits Monthly</div>
               </div>
               <div class="flex">
                   <ion-icon name="checkmark-circle-outline" class="m-1 text-green-500"></ion-icon>
                   <div class="">SSL</div>
               </div>
               <div class="flex">
                   <ion-icon name="checkmark-circle-outline" class="m-1 text-yellow-500"></ion-icon>
                   <div class="">Weekly Backups</div>
               </div>
               <div class="flex">
                   <ion-icon name="close-circle-outline" class="m-1 text-red-500"></ion-icon>
                   <div class="">Free E-mail</div>
               </div>
           </div>
           <div class="flex justify-center">
               <div
                   class="bg-stone-900 text-white cursor-pointer m-4 px-8 py-1 rounded-2xl hover:bg-white hover:text-stone-900 font-medium">
                   Subscribe</div>
           </div>
       </div> */}
       <div
           class="bg-white m-4 shadow-xl min-h-96 flex flex-col justify-center text-black hover:border-t-8 hover:border-r-8 hover:border-violet-500 rounded-lg transition duration-400 ease-in">
           <div class="m-8 h-96">
               <div class=" m-2">Diamond</div>
               <div class=" m-2 text-3xl">MEDIA AD</div>
               <div class=" m-2 mt-8">For Freelancers</div>
               <div class="flex">
                   <ion-icon name="checkmark-circle-outline" class="m-1 text-green-500"></ion-icon>
                   <div class=""></div>
               </div>
               <div class="flex">
                   <ion-icon name="checkmark-circle-outline" class="m-1 text-green-500"></ion-icon>
                   <div class=""></div>
               </div>
               <div class="flex">
                   <ion-icon name="checkmark-circle-outline" class="m-1 text-green-500"></ion-icon>
                   <div class=""></div>
               </div>
               <div class="flex">
                   <ion-icon name="checkmark-circle-outline" class="m-1 text-green-500"></ion-icon>
                   <div class=""></div>
               </div>
               <div class="flex">
                   <ion-icon name="checkmark-circle-outline" class="m-1 text-green-500"></ion-icon>
                   <div class=""></div>
               </div>
               <div class="flex">
                   <ion-icon name="checkmark-circle-outline" class="m-1 text-green-500"></ion-icon>
                   <div class=""></div>
               </div>
               <div class="flex">
                   <ion-icon name="checkmark-circle-outline" class="m-1 text-green-500"></ion-icon>
                   <div class=""></div>
               </div>
           </div>
           <div class="flex justify-center">
               <div
                   class="bg-stone-900 text-white cursor-pointer m-4 px-8 py-1 rounded-2xl hover:bg-white hover:text-stone-900 font-medium">
                   Subscribe</div>
           </div>
       </div>
   </div>
</div>
<script src="https://cdn.tailwindcss.com"></script>
<script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </div>
  )
}

export default Home