import './style.css';

const UserCard = ({ picture, name, gender, email, phone }) => {
  return (
    <div className="user-container">
      <div className="container-picture">
        <img className="picture" src={picture} alt={`picture from ${name}`} />
      </div>
      <div className="container-info">
        <h3 className="name">Nome: {name}</h3>
        <p className="gender">Sexo: {gender}</p>
        <p className="contact">Email: {email}</p>
        <p className="contact">Telefone: {phone}</p>
      </div>
    </div>
  );
};

export default UserCard;
