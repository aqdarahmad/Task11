import { useState } from "react";
import './addproduct.css'

export default function AddProduct({ onClose }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      name,
      price: parseFloat(price),
      description,
    };

    const storedProducts = JSON.parse(localStorage.getItem("localProducts") || "[]");
    storedProducts.push(newProduct);
    localStorage.setItem("localProducts", JSON.stringify(storedProducts));

    setName('');
    setPrice('');
    setDescription('');

    onClose();
  };

  return (
    <div className="overlay">
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          step="0.01"
          min="0"
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <div className="button-group">
          <button type="submit">Add Product</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </div>
      </form>
    </div>
  );
}


/* لحتى اضيف cancle بعتت بروبس اسمه كلوز ل AddProduct
ممكن انه يكون في طريقه تانيه  */

/* 1. تمرير دالة onClose كـ prop
بمعنى: المكوّن الأب (اللي بيحوي الفورم) هو اللي بيقرر إذا الفورم ظاهر أو مخفي. هو بيبعث للمكوّن دالة onClose، ولما تضغط زر إلغاء (Cancel) المكوّن بيستخدم الدالة ليقول للأب “خبي الفورم”.
الفرق: الأب هو المسؤول واللي مسيطر على حالة إظهار الفورم.
مميزاته: بسيط وواضح.
عيوبه: لو في مكوّنات كثيرة داخل بعض (متداخلة) لازم تبعت الدالة props من أب لولد ولولد ثاني، وهذا ممكن يصير تعقيد.

2. استخدام Context
هنا ما بدك تبعت الدالة كـ prop، بل بتعمل مساحة خاصة (Context) تخزن فيها معلومات إذا الفورم ظاهر أو لا، وكل المكوّنات تقدر تستخدمها بسهولة بدون ما تبعت props لكل مكوّن.
الفرق: البيانات والحالة بتكون مشتركة بين أكثر من مكوّن بدون تمرير دوال.
مميزاته: مناسب للمشاريع الكبيرة ولما تكون المكوّنات كثيرة ومتداخلة.
عيوبه: شوي معقد ومحتاج تتعلم كيف تنشئ Context وتستخدمه صح.

3. إدارة الحالة داخل نفس المكوّن
يعني المكون هو بتحكم بنفسه ازا يكون ظاهر او مخفي
يعني الفورم يكون عنده حالة خاصة فيه (مثلاً isVisible) وهو يقرر متى يكون ظاهر أو مخفي بنفسه، ولما تضغط Cancel هو يغير حالته ويخفي نفسه.
الفرق: المكوّن هو اللي مسيطر على حالته، والأب ما عنده فكرة إذا الفورم مفتوح أو لا.
مميزاته: سهل لو الفورم مستقل وما بدك تشارك حالته مع مكوّنات ثانية.
عيوبه: الأب ما يقدر يتحكم أو يعرف حالة الفورم، وهذا ممكن يصير مشكلة لو بدك تزامن الحالة مع جزء ثاني من الصفحة. */