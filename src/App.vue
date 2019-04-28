<template>
  <div id="app" class="container">
    <div class="columns is-centered">
      <Player name="You" :life="lifePlayer"/>
      <Player name="Monster" :life="lifeMonster"/>
    </div>
    <div class="is-divider"></div>
    <div class="columns">
      <div class="column" v-if="buttons === false">
        <button class="button is-link" @click.prevent="seeButtons">Start a new game</button>
      </div>
    </div>
    <div class="columns is-centered" v-if="buttons === true">
      <ButtonComponent color="is-danger" :name-function="attack" name="Attack"></ButtonComponent>
      <ButtonComponent color="specialAttack" :name-function="attackSpecial" name="Special attack"></ButtonComponent>
      <ButtonComponent color="is-success" :name-function="heal" name="Heal"></ButtonComponent>
      <ButtonComponent color="giveUp" :name-function="giveUp" name="Give Up"></ButtonComponent>
    </div>
    <Modal 
    v-if="lifePlayer <= 0 || lifeMonster <= 0"
    :cancel-function="cancel" 
    :new-game-function="newGame" 
    :result="result"
    />
  </div>
</template>

<script>
import Player from './components/Player.vue'
import ButtonComponent from './components/ButtonComponent.vue'
import Modal from './components/Modal.vue'

export default {
  name: 'app',
  components: { 
    Player, ButtonComponent, Modal
  },
  data: function() {
    return {
      lifePlayer: 100,
      lifeMonster: 100,
      buttons: false,
      result: '',
    }
  },
  methods: {
    seeButtons: function () {
      this.buttons = !this.buttons;
    },
    attack: function() {
      this.lifeMonster -= this.attackPlayer();
      this.lifePlayer -= this.attackMonster();
    },
    attackSpecial: function() {
      this.lifeMonster -= this.attackSpecialPlayer();
      this.lifePlayer -= this.attackMonster();
    },
    heal: function() {
      if (this.lifePlayer < 100) {
        this.lifePlayer += 10;
        this.lifePlayer -= this.attackMonster();
      }
    },
    giveUp: function() {
      this.buttons = false;
      this.lifePlayer = 100;
      this.lifeMonster = 100;
    },
    newGame: function() {
      this.lifePlayer = this.lifeMonster = 100;
    },
    cancel: function() {
      this.lifePlayer = this.lifeMonster = 100;
      this.buttons = false;
    },
    attackPlayer: function() {
      return Math.floor(Math.random() * (10 - 3)) + 3;
    } ,
    attackMonster: function() {
      return Math.floor(Math.random() * (12 - 5)) + 5;
    },
    attackSpecialPlayer: function() {
      return Math.floor(Math.random() * (20 - 10)) + 10;
    }
  },
  updated: function(){
    if (this.lifePlayer <= 0) {
      this.result = 'you loose';
    }
    else if (this.lifeMonster <= 0) {
      this.result = 'you win';
    }
  },
}
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}
</style>
