export type CarDetails = { id: number; time: string; registration: string };

export type ParkingSpaceProps = {
  id: number;
  availableParkings: Array<number>;
  setAvailableParkings: React.Dispatch<React.SetStateAction<number[]>>;
  carsParked: Array<CarDetails>;
  setCarsParked: React.Dispatch<React.SetStateAction<CarDetails[]>>;
};

export type RegistrationProps = {
  regModal: boolean;
  setRegModal: React.Dispatch<React.SetStateAction<boolean>>;
  currentTime: string;
  setCurrentTime: React.Dispatch<React.SetStateAction<string>>;
  regDetails: string;
  setRegDetails: React.Dispatch<React.SetStateAction<string>>;
  handleSubmitRegistration: () => void;
};

export type ExitProps = {
  startTime: string;
  exitTime: string;
  exitModal: boolean;
  setExitModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleConfirmExit: () => void;
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
};

export type ExitTimeProps = {
  exitTime: string;
  setExitTime: React.Dispatch<React.SetStateAction<string>>;
  exitTimeModal: boolean;
  setExitTimeModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleExitTime: () => void;
};
