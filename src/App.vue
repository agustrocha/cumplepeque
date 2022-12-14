<script setup>
</script>

<template>
  <div class="">
    <div id="inicio" class="w-full relative lg:h-72 h-32 flex">
      <img class="object-cover w-full" src="./assets/Frame_8.png"/>
      <div class="absolute w-full lg:h-72 h-32 flex justify-center items-center">
        <h1 class="lg:text-8xl text-4xl">CUMPLEPEQUE</h1>
      </div>
    </div>
    <header class="w-full h-16 bg-white flex justify-center items-center">
      <a class="mr-12 text-rosa-dark font-semibold cursor-pointer hover:text-rosa">Inicio</a>
      <a class="mr-12 text-rosa-dark font-semibold cursor-pointer hover:text-rosa">Nuestro trabajo</a>
      <a class="text-rosa-dark font-semibold cursor-pointer hover:text-rosa">Equipo</a>
    </header>
    <div class="relative flex flex-col lg:flex-row items-center w-full overflow-hidden border-b-8 border-white">
      <img class="lg:w-1/2 w-full lg:h-30r h-64 object-cover" src="./assets/globos.jpg"/>
      <div class="w-2/3 h-screen hidden lg:block rotate-12 -right-36 absolute bg-rosa-dark border-l-8  z-10"></div>
      <div class="lg:w-2/3 p-12 lg:p-0 z-20 font-semibold bg-rosa-dark lg:bg-transparent justify-center items-center border-t-8 border-white lg:border-0">
        <h3 class="text-3xl font-semibold mb-8">¿Quiénes somos?</h3>
        <p class="lg:px-12 text-sm">Cumplepeque está formado por cuatro chicas a las que les apasiona la enseñanza: somos Marta, Meritxell,
          Nerea y Zuleima, y somos Técnicas en Educación Infantil.
              <br>
              <br>
          Esta empresa surge principalmente del vínculo que mantenemos con los niños y niñas por nuestra formación. A su
          vez, se une a nuestro interés por la decoración y la animación de eventos infantiles, considerando que esta
          experiencia puede ser única e irrepetible para los más pequeños y pequeñas. Por tanto, creamos esta empresa
          que nos permite ejercer nuestra profesión de manera creativa y divertida.</p>
      </div>
    </div>
    <div id="nuestro-trabajo" class="py-12 w-full bg-azul border-b-8 border-white">
      <h3 class="text-3xl font-semibold mb-12">Nuestro trabajo</h3>
      <div class="xl:px-12 lg:px-8 w-full flex flex-col lg:flex-wrap lg:flex-row justify-center">
        <div class="flex flex-col lg:flex-row items-center justify-center mb-12 lg:mr-8 xl:mr-12">
          <div class="xl:w-60 xl:h-60 w-52 h-52 border-8 rounded-full mb-4 lg:mb-0">
            <img class="object-cover w-full h-full rounded-full" src="./assets/índice.jpg" />
          </div>
          <div class="lg:ml-8 lg:w-80 w-64 bg-white lg:p-8 p-6 flex flex-col items-center bg-white p-8 rounded-lg">
            <p class="font-semibold text-rosa-dark">Decoración</p>
            <p class="text-rosa-dark">Globoflexia especial, ecológica y biodegradable</p>
          </div>
        </div>
        <div class="flex flex-col lg:flex-row items-center justify-center mb-12">
          <div class="xl:w-60 xl:h-60 w-52 h-52 border-8 rounded-full mb-4 lg:mb-0">
            <img class="object-cover w-full h-full rounded-full" src="./assets/catering-para-fiesta-infantiles.jpg" />
          </div>
          <div class="lg:ml-8 lg:w-80 w-64 bg-white lg:p-8 p-6 rounded-lg flex items-center flex-col">
            <p class="font-semibold text-rosa-dark">Catering</p>
            <p class="text-rosa-dark">Nos encargamos del catering y las mesas dulces.</p>
          </div>
        </div>
        <div class="flex flex-col lg:flex-row items-center justify-center mb-12 lg:mr-8 xl:mr-12">
          <div class="xl:w-60 xl:h-60 w-52 h-52 border-8 rounded-full mb-4 lg:mb-0">
            <img class="object-cover w-full h-full rounded-full" src="./assets/disney.jpg" />
          </div>
          <div class="lg:ml-8 lg:w-80 w-64 bg-white lg:p-8 p-6 flex flex-col items-center bg-white p-8 rounded-lg">
            <p class="font-semibold text-rosa-dark">Temáticas</p>
            <p class="text-rosa-dark">Disney, nacionalidades, números, colores, animales, ¡y mucho más!</p>
          </div>
        </div>
        <div class="flex flex-col lg:flex-row items-center justify-center mb-12">
          <div class="xl:w-60 xl:h-60 w-52 h-52 border-8 rounded-full mb-4 lg:mb-0">
            <img class="object-cover w-full h-full rounded-full" src="./assets/tipos-de-actividades-para-ninos.jpg" />
          </div>
          <div class="lg:ml-8 lg:w-80 w-64 bg-white lg:p-8 p-6 bg-white p-8 rounded-lg flex items-center flex-col">
            <p class="font-semibold text-rosa-dark">Animación</p>
            <p class="text-rosa-dark">Te garantizamos juegos, dinámicas y aprendizaje.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div id="faq" class="py-12 w-full bg-rose flex items-center justify-center border-b-8">
      <div class="lg:p-12 p-8 m-8 bg-white rounded-lg">
        <h3 class="text-rosa-dark text-3xl mb-4">¿Alguna duda?</h3>
        <p class="text-rosa-dark">Envía un correo a <span class="italic font-semibold">cumplepeque@asociacion.es</span> para obtener más información sobre el proyecto.</p>
        <button class="mt-12 bg-rosa-dark border-0 hover:bg-rosa">Enviar correo</button>
      </div>
    </div>
    <div class="bg-azul-dark w-full h-56 flex items-center justify-center flex-col">
      <p class="mb-12">cumplepeque@asociación.es  |   696 41 72 61</p>
      <p>© Cumplepeque. Todos los derechos reservados.</p>
    </div>
  </div>
</template>

<style scoped>

.container {
  @apply px-60
}


h3 {
  font-family: 'Erica One', cursive;
}
</style>
