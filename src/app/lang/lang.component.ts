import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

import { MenuService } from '../shared/service/menu.service';
import { NgTemplateOutlet } from '@angular/common';
import _ from 'lodash';

@Component({
  selector: 'app-lang',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './lang.component.html',
  styleUrl: './lang.component.scss'
})
export class LangComponent {
  @ViewChildren('titleContent') titles!: QueryList<ElementRef>;

  title = '_.castArray';

  langList = [
    {
      label: '_.castArray',
      code: `_.castArray(1);
// => [1]

_.castArray({ 'a': 1 });
// => [{ 'a': 1 }]

_.castArray('abc');
// => ['abc']

_.castArray(null);
// => [null]

_.castArray(undefined);
// => [undefined]

_.castArray();
// => []

var array = [1, 2, 3];
console.log(_.castArray(array) === array);
// => true`
    },
    {
      label: '_.clone',
      code: `
  // 原始咖啡豆
  originalCoffeeBeans = {
    type: '阿拉比卡',
    weight: 250,
    isGround: false,
    flavorProfile: {
      aroma: '花香',
      acidity: '明亮'
    }
  };

  // 複製的咖啡豆
  clonedCoffee = _.clone(originalCoffeeBeans);

  console.log('是否為新的物件?', clonedCoffee === originalCoffeeBeans);
  // => false

  // 複製的咖啡豆磨成粉
  clonedCoffee.isGround = true;
  console.log(originalCoffeeBeans.isGround);
  // => false
  console.log(clonedCoffee.isGround);
  // => true

  // 把複製的風味改成柑橘
  clonedCoffee.flavorProfile.acidity = '柑橘';

  console.log(originalCoffeeBeans.flavorProfile);
  // => 原始的風味也變成「柑橘」

  console.log(clonedCoffee.flavorProfile);
  // => 柑橘

  console.log(originalCoffeeBeans.flavorProfile === clonedCoffee.flavorProfile);
  // => true
  `
    },
    {
      label: '_.cloneDeep',
      code: `
// Lodash _.cloneDeep()
const complexData = {
  a: 1,
  b: { c: 2 },
  d: [3, { e: 4 }],
  f: new Date(),
  g: /test/g
};

const lodashDeepCopy = _.cloneDeep(complexData);

// 修改複製後的物件
lodashDeepCopy.b.c = 99;
lodashDeepCopy.d[1].e = 88;
lodashDeepCopy.f.setFullYear(2030);

console.log('原始資料 b.c:', complexData.b.c);
// => 2 (未受影響)

console.log('原始資料 d[1].e:', complexData.d[1].e);
// => 4 (未受影響)

console.log('原始資料 f 年份:', complexData.f.getFullYear());
// => 2025 (未受影響)

===================================================================

// 原生 JavaScript: JSON.parse(JSON.stringify(object))
const complexData = {
  a: 1,
  b: { c: 2 },
  d: [3, { e: 4 }],
  f: new Date(),
  g: /test/g,
};

const jsonDeepCopy = JSON.parse(JSON.stringify(complexData));

jsonDeepCopy.b.c = 99;
jsonDeepCopy.d[1].e = 88;

// JSON 方法複製 Date 物件，會變成字串
// 所以修改會出錯
jsonDeepCopy.f.setFullYear(2030);

console.log('原始資料 b.c:', complexData.b.c);
// => 2 (未受影響)

console.log('原始資料 d[1].e:', complexData.d[1].e);
// => 4 (未受影響)

console.log('原始資料 f:', complexData.f);
// 原始 Date 物件

console.log('JSON 複製後的 f:', jsonDeepCopy.f);
// 變成日期字串
`
    },
    {
      label: '_.cloneDeepWith',
      code: `
// 字串都轉大寫
customizer(value) {
  if (typeof value === 'string') {
    return value.toUpperCase();
  }
}

const obj = { a: 'hello', b: { c: 'world' } };
const result = _.cloneDeepWith(obj, customizer);

console.log(result);
// => { a: 'HELLO', b: { c: 'WORLD' } }
      `
    },
    {
      label: '_.cloneWith',
      code: `
customizer(value) {
  if (typeof value === 'string') {
    return value + '!';
  }
}

const obj = { a: 'hi', b: { c: 'world' } };
const result = _.cloneWith(obj, customizer);

console.log(result);
// => { a: 'hi!', b: { c: 'world' } }`
    },
    {
      label: '_.conformsTo',
      code: `
const rules = {
  a: (n: number) => n > 0,
  b: (n: number) => n === 2
};

const object = { a: 1, b: 2 };
console.log(_.conformsTo(object, rules));
// => true

const object2 = { a: 0, b: 2 };
console.log(_.conformsTo(object2, rules));
// => false`},
    {
      label: '_.eq',
      code: `
console.log(NaN === NaN);      // => false
console.log(_.eq(NaN, NaN));   // => true

console.log(1 === 1);          // => true
console.log(_.eq(1, 1));       // => true

console.log({} === {});        // => false
console.log(_.eq({}, {}));     // => false`
    },
    {
      label: '_.gt',
      code: `
console.log(_.gt(3, 1));   // => true
console.log(3 > 1);        // => true

console.log(_.gt('b', 'a')); // => true
console.log('b' > 'a');      // => true

console.log(_.gt(null, 0));  // => false
console.log(null > 0);       // => false`
    },
    {
      label: '_.gte',
      code: `
_.gte(3, 1);    // => true
_.gte(3, 3);    // => true
_.gte(1, 3);    // => false
_.gte('b', 'a'); // => true
_.gte('a', 'a'); // => true`
    },
    {
      label: '_.isArguments',
      code: `
 demo(...args: number[]) {
  console.log(_.isArguments(arguments)); // => true
  console.log(_.isArguments([1, 2, 3])); // => false
}`

    },
    {
      label: '_.isArray',
      code: `
console.log(_.isArray([1, 2, 3])); // => true
console.log(_.isArray('abc'));     // => false
console.log(_.isArray({}));        // => false
console.log(Array.isArray([1, 2])); // => true`
    },
    {
      label: '_.isArrayBuffer',
      code: `
const buffer = new ArrayBuffer(8);

console.log(_.isArrayBuffer(buffer)); // => true
console.log(_.isArrayBuffer([]));     // => false
console.log(_.isArrayBuffer({}));     // => false

// 假設 buffer 是從另一個 iframe 傳來的
console.log(buffer instanceof ArrayBuffer); // => 可能是 false
console.log(_.isArrayBuffer(buffer));       // => 會是 true
      `
    },
    {
      label: '_.isArrayLike',
      code: `
console.log(_.isArrayLike([1, 2, 3]));      // => true  (陣列)
console.log(_.isArrayLike('abc'));          // => true  (字串)
console.log(_.isArrayLike({ length: 2 }));  // => true  (有 length 屬性)
console.log(_.isArrayLike({}));             // => false
console.log(_.isArrayLike(123));            // => false`
    },
    {
      label: '_.isArrayLikeObject',
      code: `
console.log(_.isArrayLikeObject([1, 2, 3]));         // => true  (陣列)
console.log(_.isArrayLikeObject({ length: 2 }));     // => true  (有 length 的物件)
console.log(_.isArrayLikeObject('abc'));             // => false (字串，不是物件)
console.log(_.isArrayLikeObject({}));                // => false (沒有 length)
console.log(_.isArrayLikeObject(123));               // => false (不是物件)
console.log(_.isArrayLikeObject(document.querySelectorAll('div'))); // => true (NodeList)
`
    },
    {
      label: '_.isBoolean',
      code: `
console.log(typeof true === 'boolean');                // => true
console.log(typeof new Boolean(true) === 'boolean');   // => false

console.log(_.isBoolean(true));                        // => true
console.log(_.isBoolean(new Boolean(true)));           // => true`
    }
  ];

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.initTitle();
  }

  initTitle() {
    this.menuService.selectedLabel$.subscribe((label) => {
      if (label) {
        this.title = label;
        this.scrollToLabel(label);
      }
    });
  }

  // 滾動到指定 label 的方法
  scrollToLabel(label: string) {
    const el = document.getElementById(label);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
