
export default function Contact() {
  return (
    <div className="containerContact">
     <div className="row">
      <div className="col-md-2"></div>
      <div className="rowContact col-md-8">
      <h2 className='text-center'>Formulaires de contact</h2>
    <form>
      <div>
        <div className="form-group">
          <label className="nom">Entrez votre nom</label>
          <input type="text" className="form-control" id="nom" placeholder="Merci de saisir ici"/>
        </div>
        
        <div className="form-group my-3">
          <label className="email">Entrez votre mail</label>
          <input type="email" className="form-control" id="email" placeholder="Merci de saisir ici"/>
        </div>
        
        <div className="form-group my-2">
          <label className="selection">vous nous avez connu via:</label>
          <select id="selection" className="form-control">
            <option value="">Liste de choix...</option>
            <optgroup label="Groupe d'options 1">
              <option value="">Facebook</option>
              <option value="">intagram</option>
              <option value="">twitter</option>
            </optgroup>
            <optgroup label="Groupe d'options 2">
              <option value="">votre entourage</option>
              <option value="">fiche de publicite</option>
            </optgroup>
          </select>
        </div>
        <div className="form-group">
          <label className="bio">Commentaire</label>
          <textarea rows={5} className="form-control" id="bio"></textarea>
          <input className="text-center my-3" type="button" value="Envoyer" />
        </div>
      </div>
    </form>
      </div>
      <div className="col-md-2"></div>
     </div>
     
</div>
  )
}
