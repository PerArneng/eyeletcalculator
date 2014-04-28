/// <reference path="../lib/angular.d.ts"/>
/// <reference path="EyeletModel.ts"/>
/// <reference path="EyeletScope.ts"/>

module eyelet {

    export class EyeletCalculator {

        constructor( ) {
        }

        public estimateEyeletCount(length: number, cc:number) : number {
            return Math.round(length / cc) + 1;
        }

        public calculateEyeletDistance(length: number, eyeletCount:number) : number {
            return (length / (eyeletCount - 1));
        }

        public calculateTotalEyeletCount(longSideCount, shortSideCount) {
            return (longSideCount * 2 + shortSideCount * 2) - 4
        }

        public generateEyelets(eyeletCount:number, eyeletDistance:number):Eyelet[] {
            var eyelets : Eyelet[] = [];
            for (var i = 0; i < eyeletCount; i++) {
                eyelets.push(new Eyelet(i + 1, i * eyeletDistance));
            }
            return eyelets;
        }

        public calculateSideResult(side:Side) : SideResult {

            if (!side.hasEyeletCount()) {
                side.eyeletCount = this.estimateEyeletCount(side.length, side.cc);
            }

            var eyeletDistance = this.calculateEyeletDistance(side.length, side.eyeletCount);
            var eyelets = this.generateEyelets(side.eyeletCount, eyeletDistance);

            return new SideResult(eyelets, eyeletDistance);
        }

    }
}

