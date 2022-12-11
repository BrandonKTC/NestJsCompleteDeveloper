import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
  supplyPower(watts: number) {
    console.log(`PowerService: Supplying ${watts} watts of power.`);
  }
}
