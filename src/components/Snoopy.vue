<template>
  <div class="snoopy-container">
    <div class="snoopy">
      <!-- Cabeza -->
      <div class="head">
        <!-- Orejas -->
        <div class="ear ear-left"></div>
        <div class="ear ear-right"></div>
        <!-- Ojos -->
        <div class="eye eye-left"></div>
        <div class="eye eye-right"></div>
        <!-- Nariz -->
        <div class="nose"></div>
        <!-- Boca -->
        <div class="mouth"></div>
      </div>
      <!-- Cuerpo -->
      <div class="body">
        <!-- Manos -->
        <div class="arm arm-left"></div>
        <div class="arm arm-right"></div>
        <!-- Patas -->
        <div class="paw paw-left"></div>
        <div class="paw paw-right"></div>
      </div>
      <!-- Gorro de Navidad -->
      <div class="santa-hat">
        <div class="hat-top"></div>
        <div class="hat-base"></div>
        <div class="hat-pom"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.snoopy-container {
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
}

.snoopy {
  position: relative;
  width: 200px;
  height: 250px;
  animation: bounce 2s ease-in-out infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* Cabeza */
.head {
  position: absolute;
  width: 120px;
  height: 100px;
  background: #ffffff;
  border-radius: 50% 50% 45% 45%;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* Orejas */
.ear {
  position: absolute;
  width: 50px;
  height: 60px;
  background: #ffffff;
  border-radius: 50%;
  border: 3px solid #000;
  top: -10px;
}

.ear-left {
  left: 5px;
  transform: rotate(-25deg);
}

.ear-right {
  right: 5px;
  transform: rotate(25deg);
}

/* Ojos */
.eye {
  position: absolute;
  width: 12px;
  height: 12px;
  background: #000;
  border-radius: 50%;
  top: 35px;
  animation: blink 3s infinite;
}

.eye-left {
  left: 35px;
}

.eye-right {
  right: 35px;
}

@keyframes blink {
  0%, 90%, 100% {
    height: 12px;
  }
  95% {
    height: 2px;
  }
}

/* Nariz */
.nose {
  position: absolute;
  width: 20px;
  height: 18px;
  background: #000;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  top: 55px;
  left: 50%;
  transform: translateX(-50%);
}

/* Boca */
.mouth {
  position: absolute;
  width: 40px;
  height: 20px;
  border: 3px solid #000;
  border-top: none;
  border-radius: 0 0 40px 40px;
  top: 70px;
  left: 50%;
  transform: translateX(-50%);
}

/* Cuerpo */
.body {
  position: absolute;
  width: 140px;
  height: 120px;
  background: #ffffff;
  border-radius: 50% 50% 40% 40%;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* Brazos */
.arm {
  position: absolute;
  width: 35px;
  height: 60px;
  background: #ffffff;
  border-radius: 20px;
  top: 90px;
  border: 3px solid #000;
}

.arm-left {
  left: 20px;
  transform: rotate(-20deg);
}

.arm-right {
  right: 20px;
  transform: rotate(20deg);
}

/* Patas */
.paw {
  position: absolute;
  width: 45px;
  height: 30px;
  background: #ffffff;
  border-radius: 50%;
  bottom: 0;
  border: 3px solid #000;
}

.paw-left {
  left: 25px;
}

.paw-right {
  right: 25px;
}

/* Gorro de Navidad */
.santa-hat {
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
}

.hat-base {
  width: 100px;
  height: 25px;
  background: #c41e3a;
  border-radius: 5px;
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.hat-base::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 5px;
  background: #ffffff;
  bottom: 0;
  border-radius: 0 0 5px 5px;
}

.hat-top {
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 60px solid #c41e3a;
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}

.hat-pom {
  width: 20px;
  height: 20px;
  background: #ffffff;
  border-radius: 50%;
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

/* Responsive */
@media (max-width: 768px) {
  .snoopy {
    width: 150px;
    height: 190px;
  }
  
  .head {
    width: 90px;
    height: 75px;
  }
  
  .body {
    width: 105px;
    height: 90px;
    top: 60px;
  }
  
  .ear {
    width: 38px;
    height: 45px;
  }
  
  .arm {
    width: 26px;
    height: 45px;
  }
  
  .paw {
    width: 34px;
    height: 23px;
  }
  
  .hat-base {
    width: 75px;
    height: 19px;
  }
  
  .hat-top {
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 45px solid #c41e3a;
  }
}
</style>
