/// <reference path="../lib/angular.d.ts"/>
/// <reference path="EyeletModel.ts"/>
/// <reference path="EyeletScope.ts"/>
/// <reference path="EyeletCalculator.ts"/>

module eyelet {

    export class EyeletController {

        constructor(private $scope: EyeletScope ) {
            $scope.ctrl = this;
        }

        public recalculate() {

            var calc : EyeletCalculator = new EyeletCalculator();

            var longSide : Side = new Side(this.$scope.lsLength, this.$scope.lsEyeletCount, this.$scope.lsCc);
            if (longSide.isValid()) {
                var res : SideResult = calc.calculateSideResult(longSide);
                this.$scope.longResult = res;
            }

            var shortSide : Side = new Side(this.$scope.ssLength, this.$scope.ssEyeletCount, this.$scope.ssCc);
            if (shortSide.isValid()) {
                var res : SideResult = calc.calculateSideResult(shortSide);
                this.$scope.shortResult = res;
            }

            if (shortSide.isValid() && longSide.isValid()) {
                this.$scope.totalEyeletCount =
                        calc.calculateTotalEyeletCount(shortSide.eyeletCount, longSide.eyeletCount);
            }

        }
    }
}

