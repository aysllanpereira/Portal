
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Styles from "../Funcionarios/funcionarios.module.css";
import Navbar from "../Navbar/MyNavBar";
const Funcionarios = () => {

    const funcionarios = [
        {id: 1, nome: "Aysllan Santos", setor: "Setor", funcao: "TI"},
        {id: 2, nome: "Aryelle Santos", setor: "Setor", funcao: "RH"},
        {id: 1, nome: "Jureg Silva", setor: "Setor", funcao: "Financeiro"},
        {id: 1, nome: "Lula Inácio", setor: "Setor", funcao: "Ladrão"},
        {id: 1, nome: "Neymar Júnior", setor: "Setor", funcao: "Diretor"},
        {id: 1, nome: "Ronaldo Nazário", setor: "Setor", funcao: "Presidente"}
    ];

  return (
    <>
    < Navbar />
      <h1 className={Styles.h1}>Funcionários</h1>
      <div className={Styles.formDiv}>
        <form action="#" className={`d-flex align-items-center gap-3 ${Styles.form}`}>
            <input
              type="text"
              name="pesquisa"
              id="pes"
              className={`form-control ${Styles.input}`}
              placeholder="🔍 Pesquisar Funcionários"
            />
            <select name="funcionarios" id="fun" className={`form-select ${Styles.select}`}>
                <option selected>Team</option>
                <option value="Rh">Rh</option>
                <option value="Marketing">Marketing</option>
                <option value="Financeiro">Financeiro</option>
            </select>
        </form>
      </div>

      <div className={Styles.cards}>
        {funcionarios.map((func) => (
            <div key={func.id} className={Styles.card}>
                <h2>{func.nome}</h2>
                <hr />
                <p>{func.setor}</p>
                <p>{func.funcao}</p>
            </div>
        ))}
      </div>
      <div className={Styles.button}>
        <button>Veja Mais</button>
      </div>
    </>
  );
};

export default Funcionarios;
