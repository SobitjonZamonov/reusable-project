import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { type LoanProduct, type CardProduct } from "../model/products.schema";
import { Separator } from "@/shared/ui/separator";
import { Button } from "@/shared/ui/button";
import { Pencil, Trash2 } from "lucide-react";

interface ProductCardProps {
    product: LoanProduct | CardProduct;
    type: "loan" | "card";
    onEdit?: (product: LoanProduct) => void;
    onDelete?: (id: number) => void;
}

const formatCurrency = (amount: number | string) => {
    const num = typeof amount === "string" ? parseFloat(amount) : amount;
    return new Intl.NumberFormat("uz-UZ").format(num);
};

const LoanProductCard = ({ product, onEdit, onDelete }: { product: LoanProduct; onEdit?: (product: LoanProduct) => void; onDelete?: (id: number) => void }) => {
    return (
        <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <CardTitle className="text-lg">{product.title_ru}</CardTitle>
                <div className="flex gap-2">
                    <Button variant="outline" size="icon" onClick={() => onEdit?.(product)}>
                        <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="destructive" size="icon" onClick={() => onDelete?.(product.id)}>
                        <Trash2 className="h-4 w-4" />
                    </Button>
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-sm text-muted-foreground">Maksimal summa</p>
                        <p className="font-semibold">{formatCurrency(product.max_amount)} so'm</p>
                    </div>
                    <div>
                        <p className="text-sm text-muted-foreground">Muddat</p>
                        <p className="font-semibold">{product.lifetime ?? "N/A"} oy</p>
                    </div>
                    <div>
                        <p className="text-sm text-muted-foreground">Foiz darajasi</p>
                        <p className="font-semibold">{product.percent}%</p>
                    </div>
                    <div>
                        <p className="text-sm text-muted-foreground">Grats period</p>
                        <p className="font-semibold">{product.grace_period ?? "Yo'q"} oy</p>
                    </div>
                </div>
                <Separator />
                <div className="flex flex-col gap-1">
                    <span className="text-sm text-muted-foreground">O'zbekcha: {product.title_uz}</span>
                    <span className="text-sm text-muted-foreground">English: {product.title_en}</span>
                </div>
            </CardContent>
        </Card>
    );
};

const CardProductCard = ({ product }: { product: CardProduct }) => {
    return (
        <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
                <CardTitle className="text-lg">{product.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-sm text-muted-foreground">Narx</p>
                        <p className="font-semibold">{formatCurrency(product.price)} {product.currency_code}</p>
                    </div>
                    <div>
                        <p className="text-sm text-muted-foreground">Yetkazib berish</p>
                        <p className="font-semibold">{formatCurrency(product.delivery_price)} {product.currency_code}</p>
                    </div>
                    <div>
                        <p className="text-sm text-muted-foreground">Kategoriya</p>
                        <p className="font-semibold">{product.category}</p>
                    </div>
                    <div>
                        <p className="text-sm text-muted-foreground">Holat</p>
                        <p className="font-semibold">{product.active === "1" ? "Faol" : "Nofaol"}</p>
                    </div>
                </div>
                <Separator />
                <div className="flex flex-col gap-1">
                    <span className="text-sm text-muted-foreground">O'zbekcha: {product.description_uz ?? "N/A"}</span>
                    <span className="text-sm text-muted-foreground">English: {product.description_en ?? "N/A"}</span>
                </div>
            </CardContent>
        </Card>
    );
};

export const ProductCard = ({ product, type, onEdit, onDelete }: ProductCardProps) => {
    if (type === "loan") {
        return <LoanProductCard product={product as LoanProduct} onEdit={onEdit} onDelete={onDelete} />;
    }
    return <CardProductCard product={product as CardProduct} />;
};
