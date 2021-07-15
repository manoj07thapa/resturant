import axios from 'axios'

export default function CartQuantity({ qty, productId, mutate }: any) {

    const handleChange = async (e: any) => {
        try {
            const res = await axios.put(`/api/cart/editCartQuantity`, {

                quantity: parseInt(e.target.value), productId
            });
            mutate();
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <label htmlFor="" className="mr-2">Quantity:</label>
            <select onChange={handleChange}
                defaultValue={qty}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>

        </div>
    )
}
