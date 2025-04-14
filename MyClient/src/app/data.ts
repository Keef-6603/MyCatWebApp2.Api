export interface Catbox {
  Profile: string;
  Boxtype: string;
  RegistrationStatus: string;
  BoxSize: number;

}

export const dataset: Array<Catbox> = [
  {
    Profile: 'Iran',
    Boxtype: 'Tehran',
    RegistrationStatus: 'Approved',
    BoxSize: 79369900,

  },
  {
    Profile: 'Turkey',
    Boxtype: 'Ankara',
    RegistrationStatus: 'Pending',
    BoxSize: 78741053,

  },
  {
    Profile: 'Germany',
    Boxtype: 'Berlin',
    RegistrationStatus: 'Rejected',
    BoxSize: 81770900,

  },
  {
    Profile: 'France',
    Boxtype: 'Paris',
    RegistrationStatus: 'Pending',
    BoxSize: 66710000,

  },
  {
    Profile: 'Italy',
    Boxtype: 'Rome',
    RegistrationStatus: 'Approved',
    BoxSize: 60665551,

  },
  {
    Profile: 'Serbia',
    Boxtype: 'Belgrade',
    RegistrationStatus: 'Rejected',
    BoxSize: 7076372,

  },
  {
    Profile: 'United Kingdom',
    Boxtype: 'London',
    RegistrationStatus: 'Pending',
    BoxSize: 65110000,

  },
  {
    Profile: 'United States',
    Boxtype: 'Washington D.C',
    RegistrationStatus: 'Pending',
    BoxSize: 323947000,

  },
  {
    Profile: 'Russia',
    Boxtype: 'Moscow',
    RegistrationStatus: 'Pending',
    BoxSize: 146599183,

  },
  {
    Profile: 'China',
    Boxtype: 'Beijing',
    RegistrationStatus: 'Approved',
    BoxSize: 1377422166,

  },
  {
    Profile: 'India',
    Boxtype: 'New Delhi',
    RegistrationStatus: 'Pending',
    BoxSize: 1295210000,

  },
];

export interface Catprofile {
  Id: number,
  Name: string,
  NickName: string,
  Age: number,
  Color: string,
  Weight: number,
  Sex: string,
  PurrferedBoxSize: string,
  Created: string,
  IsApproved: boolean

}

export const dataset_2: Array<Catprofile> = [
  {
    Id: 0,
    Name: 'Snuggles',
    NickName: '',
    Age: 4,
    Color: 'black',
    Weight: 35,
    Sex: 'Femail',
    PurrferedBoxSize: 'large',
    Created: '04132025',
    IsApproved: true
  },
  {
    Id: 1,
    Name: 'Smudge',
    NickName: '',
    Age: 4,
    Color: 'black and white',
    Weight: 36,
    Sex: 'Femail',
    PurrferedBoxSize: 'large',
    Created: '04132025',
    IsApproved: true

  },
  {
    Id: 2,
    Name: 'Sniffles',
    NickName: '',
    Age: 6,
    Color: 'calico',
    Weight: 35,
    Sex: 'mail',
    PurrferedBoxSize: 'large',
    Created: '04132025',
    IsApproved: false
  },
  {
    Id: 3,
    Name: 'tiger',
    NickName: '',
    Age: 2,
    Color: 'orange',
    Weight: 20,
    Sex: 'Femail',
    PurrferedBoxSize: 'large',
    Created: '04132025',
    IsApproved: true

  },
  {
    Id: 4,
    Name: 'Snuffles',
    NickName: '',
    Age: 4,
    Color: 'gray',
    Weight: 20,
    Sex: 'Femail',
    PurrferedBoxSize: 'large',
    Created: '04132025',
    IsApproved: true

  },
  {
    Id: 5,
    Name: 'Lucky',
    NickName: 'Yard bird',
    Age: 5,
    Color: 'black',
    Weight: 22,
    Sex: 'Femail',
    PurrferedBoxSize: 'large',
    Created: '04132025',
    IsApproved: true

  },

];
