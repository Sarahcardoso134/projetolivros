<script>
import {v4 as uuidv4} from 'uuid'
export default {
  data() {
    return {
      autores: [
        {id: '01986caa-0a42-4eef-9d11-25c77fd98df1', nome: 'Collen Hoover'},
        {id: '19be6257-67d9-413a-a0ff-840a8acaba75', nome: 'Glenda Blond'},
        {id: '520465a6-36e2-4554-9499-d2ed6209b9e7', nome: 'Elle Kenedy'},
        {id: '632a0b5e-41f2-4acb-8c36-019b10f81ade', nome: 'Penelope Douglas'},
        {id: '9db7a2ed-e1c2-43b2-b222-47a64a860427', nome: 'Sarah Jaimes'},
      ],
      novo_autores: "",
    };
  },
  methods: {
    salvar() {
      const novo_id = uuidv4();
      this.times.push({
        id:novo_id,
        nome: this.novo_autores,
      });
    },
  },
};
</script>
<template>
  <main>
    <div class="container">
      <div class="title">
        <h2>Livraria Página</h2>
      </div>
      <div class="form-input">
        <input type="text" v-model="novo_autores" />
        <button @click="salvar">Salvar</button>
      </div>
    </div>
  </main>
</template>
<style>
.title {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
.form-input {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}
.form-input input {
  width: 60%;
  height: 40px;
  border: 1px solid rgb(147, 147, 147);
  border-radius: 10px;
  margin-left: 1px;
  width: 20%;
  height: 40px;
  border: 1px solid rgb(211, 211, 211);
  border-radius: 10px;
  background-color: rgb(11, 217, 224);
  color: rgb(255, 255, 255);
  font-weight: bold;
  cursor: pointer;
}
.list-times{
  display: flex;
  justify-content: center;
}
.list-times table{
  width: 80%;
  margin: 0 auto;
  border-collapse: collapse;
}
table tr td{
  border: 1px solid rgb(0, 0, 0);
  padding: 10px;
}
</style>
