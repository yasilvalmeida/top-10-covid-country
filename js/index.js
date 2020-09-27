/* This JS file with have all needed classes */
/*************************************************************/

/* This class will allow manapulate Country objects */
/* Country Class Begin */
class Country {
  /* This special function (constructor) will create a country object from Id,
    Name,
    NewConfirmed,
    TotalConfirmed,
    NewDeaths,
    TotalDeaths,
    NewRecovered,
    TotalRecovered */
  constructor(
    Id,
    Name,
    NewConfirmed,
    TotalConfirmed,
    NewDeaths,
    TotalDeaths,
    NewRecovered,
    TotalRecovered
  ) {
    this.Id = Id;
    this.Name = Name;
    this.NewConfirmed = NewConfirmed;
    this.TotalConfirmed = TotalConfirmed;
    this.NewDeaths = NewDeaths;
    this.TotalDeaths = TotalDeaths;
    this.NewRecovered = NewRecovered;
    this.TotalRecovered = TotalRecovered;
  }
  /* This function will return the Id */
  getId() {
    return this.Id;
  }
  /* This function will return the Name */
  getName() {
    return this.Name;
  }
  /* This function will return the NewConfirmed */
  getNewConfirmed() {
    return this.NewConfirmed;
  }
  /* This function will return the TotalConfirmed */
  getTotalConfirmed() {
    return this.TotalConfirmed;
  }
  /* This function will return the NewDeaths */
  getNewDeaths() {
    return this.NewDeaths;
  }
  /* This function will return the TotalDeaths */
  getTotalDeaths() {
    return this.TotalDeaths;
  }
  /* This function will return the NewRecovered */
  getNewRecovered() {
    return this.NewRecovered;
  }
  /* This function will return the TotalRecovered */
  getTotalRecovered() {
    return this.TotalRecovered;
  }
}
/* Country Class End */
