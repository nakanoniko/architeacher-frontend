import {Pipe, PipeTransform} from '@angular/core'

@Pipe({name: 'date_approx'})
export class ApproximateDatePipe implements PipeTransform {
    transform(value){
        if (!value)
            return value;

        let year = value;

        let century = {
            1:'I',
            2:'II',
            3:'III',
            4:'IV',
            5:'V',
            6:'VI',
            7:'VII',
            8:'VIII',
            9:'IX',
            10:'X',
            11:'XI',
            12:'XII',
            13:'XIII',
            14:'XIV',
            15:'XV',
            16:'XVI',
            17:'XVII',
            18:'XVIII',
            19:'XIX',
            20:'XX',
            21:'XXI'
        };

        if(year > 0){
            let fp = Math.floor(year / 100) + 1;
            let sp = year % 100;

            let template =
                0 == sp && fp-- ? 'Рубеж {0} и {1} веков':
                    1 == sp? '{0} Век':
                        2 <= sp ? 'Начало {0} века':
                            25 <= sp && sp < 40 ? 'Первая половина {0} века':
                                40 <= sp && sp < 60 ? 'Середина {0} века':
                                    60 <= sp && sp < 75 ? 'Вторая половина {0} века':
                                        75 <= sp && sp < 100 ? 'Конец {0} века': null;
            if (!template)
                return year;

            if(!(fp in century)){
                return value;
            }

            return this.format(template, century[fp], century[fp+1])
        } else{
            let fp = Math.abs(Math.floor(year/100));
            let template = null;
            if(fp >= 10)
                return this.format('{0} тысячелетие до н.э.', century[Math.floor(fp / 10)]);

            else return this.format('{0} век до н.э.', century[fp]);
        }
    }

    format (str: string, ...args: string[]){
        return str.replace(/{(\d+)}/g, function(m,n){
            return args[n] ? args[n] : m;
        });
    };
}