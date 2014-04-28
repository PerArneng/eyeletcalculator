module eyelet {

    export class Side {

        constructor(private _length:number, private _eyeletCount:number, private _cc:number) {

        }

        public hasCC():boolean {
            return this._cc != null;
        }

        public hasEyeletCount():boolean {
            return this._eyeletCount != null;
        }

        public isValid() : boolean {
            return this.hasEyeletCount() || this.hasCC();
        }

        get length():number {
            return this._length;
        }

        get eyeletCount():number {
            return this._eyeletCount;
        }

        set eyeletCount(val:number) {
            this._eyeletCount = val;
        }

        get cc():number {
            return this._cc;
        }

    }

    export class Eyelet {

        constructor(private _index:number, private _position:number) {}

        get index():string {
            return this._index.toFixed(0);
        }

        get position():string {
            return this._position.toFixed(2);
        }

    }

    export class SideResult {

        constructor(private _eyelets:Eyelet[], private _eyeletDistance:number) {

        }

        get eyelets():Eyelet[] {
            return this._eyelets;
        }

        get eyeletDistance():number {
            return this._eyeletDistance;
        }

        get eyeletDistanceFormatted():string {
            return this.eyeletDistance.toFixed(2);
        }
    }
}