 <script>
 export default {
   data() {
     return {
       Gêneros: [
         {id: 'd4ce72f7-1971-4107-9c80-77d021dd63ea', nome: 'Romance',},
         {id: 'b2f0af2d-e110-4a9a-8c95-3fea7dd68653', nome: 'Comédia',},
         {id: '539782c5-da35-4612-9323-d6687a584479', nome: 'Ação',},
         {id: 'e8c96c5b-4e96-4eec-93f8-b43b351e4a27', nome: 'Suspense',},    
         {id: 'a1f5e3d3-5d04-46f5-bc6f-185d46a28993', nome: 'Drama',}
        ],
     };
   },
 }
  </script>
  <template>
  <main>
    <div class="container">
      <div class="title">
        <h2>Livraria Página</h2>
      </div>
      <div class="form-input">
        <input type="text" />
        <button>Salvar</button>
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
  border: 1px solid rgb(0, 0, 0);
  border-radius: 10px;
  padding: 0 10px;
}
.form-input button {
  margin-left: 1px;
  width: 20%;
  height: 40px;
  border: 1px solid rgb(0, 0, 0);
  border-radius: 10px;
  background-color: rgb(14, 230, 212);
  color: rgb(255, 255, 255);
  font-weight: bold;
  cursor: pointer;
}
.list-jogadores{
  display: flex;
  justify-content: center;
}
.list-jogadores table{
  width: 80%;
  margin: 0 auto;
  border-collapse: collapse;
}
table tr td{
  border: 1px solid rgb(211, 211, 211);
  padding: 10px;
}
</style>
