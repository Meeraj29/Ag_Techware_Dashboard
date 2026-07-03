export interface VGMShipment {
  id: string;
  iso: string;
  cargo: string;
  tare: string;
}

export interface VGMState {
  shipments: VGMShipment[];
  stats: {
    totalContainers: number;
    calculatedToday: number;
    exportedRecords: number;
  };
  calculator: {
    containerNo: string;
    isoType: string;
    cargoWeight: string;
    tareWeight: string;
    dunnage: string;
    finalVGM: number;
    finalVGMTons: number;
  };
}
