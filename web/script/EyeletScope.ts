/// <reference path="../lib/angular.d.ts"/>
/// <reference path="EyeletController.ts"/>

module eyelet {

    export interface EyeletScope extends ng.IScope {
        ctrl : EyeletController;
        totalEyeletCount : number;
        lsLength : number;
        ssLength : number;
        lsEyeletCount : number;
        ssEyeletCount : number;
        lsCc : number;
        ssCc : number;
        longResult : SideResult;
        shortResult : SideResult
    }

}
