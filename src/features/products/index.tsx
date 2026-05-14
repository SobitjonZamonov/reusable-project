import { ProductCard } from "./ui/product-card";
import { useGetLoanProducts, useGetCardProducts } from "./api/use-get-products";
import { useCreateLoanProduct } from "./api/use-create-loan-product";
import { useUpdateLoanProduct } from "./api/use-update-loan-product";
import { useDeleteLoanProduct } from "./api/use-delete-loan-product";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/shared/ui/tabs";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/shared/ui/dialog";
import { type LoanProduct } from "./model/products.schema";
import { Plus, Loader2 } from "lucide-react";
import { useState } from "react";

export const ProductsList = () => {
    const { data: loanData, isLoading: isLoadingLoans, error: loanError } = useGetLoanProducts();
    const { data: cardData, isLoading: isLoadingCards, error: cardError } = useGetCardProducts();
    const createMutation = useCreateLoanProduct();
    const updateMutation = useUpdateLoanProduct();
    const deleteMutation = useDeleteLoanProduct();

    const [editingProduct, setEditingProduct] = useState<LoanProduct | null>(null);
    const [deletingId, setDeletingId] = useState<number | null>(null);
    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);

    // Form state
    const [formData, setFormData] = useState({
        title_ru: "",
        title_uz: "",
        title_en: "",
        max_amount: 0,
        percent: 0,
        lifetime: null as number | null,
        grace_period: null as number | null,
    });

    const resetForm = () => {
        setFormData({
            title_ru: "",
            title_uz: "",
            title_en: "",
            max_amount: 0,
            percent: 0,
            lifetime: null,
            grace_period: null,
        });
    };

    const handleCreate = () => {
        createMutation.mutate(formData, {
            onSuccess: () => {
                setIsCreateOpen(false);
                resetForm();
            },
        });
    };

    const handleEdit = (product: LoanProduct) => {
        setEditingProduct(product);
        setFormData({
            title_ru: product.title_ru || "",
            title_uz: product.title_uz || "",
            title_en: product.title_en || "",
            max_amount: product.max_amount,
            percent: parseFloat(product.percent) || 0,
            lifetime: product.lifetime ? parseFloat(product.lifetime) : null,
            grace_period: product.grace_period ? parseFloat(product.grace_period) : null,
        });
        setIsEditOpen(true);
    };

    const handleUpdate = () => {
        if (!editingProduct) return;
        updateMutation.mutate({ id: editingProduct.id, data: formData }, {
            onSuccess: () => {
                setIsEditOpen(false);
                setEditingProduct(null);
                resetForm();
            },
        });
    };

    const handleDelete = () => {
        if (!deletingId) return;
        deleteMutation.mutate(deletingId, {
            onSuccess: () => {
                setIsDeleteOpen(false);
                setDeletingId(null);
            },
        });
    };

    const isLoading = isLoadingLoans || isLoadingCards;
    const error = loanError || cardError;
    const loanProducts = loanData?.data ?? [];
    const cardProducts = cardData?.data ?? [];

    if (isLoading) return <div className="flex items-center justify-center p-8"><Loader2 className="h-8 w-8 animate-spin" /></div>;
    if (error) return <div className="text-destructive">Xatolik: {error.message}</div>;

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Mahsulotlar</h2>
                <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
                    <DialogTrigger asChild>
                        <Button>
                            <Plus className="mr-2 h-4 w-4" />
                            Yangi kredit qo'shish
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Yangi kredit mahsuloti</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid gap-2">
                                <Label>Ruscha nom</Label>
                                <Input value={formData.title_ru} onChange={(e) => setFormData({ ...formData, title_ru: e.target.value })} placeholder="Kredit nomi" />
                            </div>
                            <div className="grid gap-2">
                                <Label>O'zbekcha nom</Label>
                                <Input value={formData.title_uz} onChange={(e) => setFormData({ ...formData, title_uz: e.target.value })} placeholder="Kredit nomi" />
                            </div>
                            <div className="grid gap-2">
                                <Label>Inglizcha nom</Label>
                                <Input value={formData.title_en} onChange={(e) => setFormData({ ...formData, title_en: e.target.value })} placeholder="Kredit nomi" />
                            </div>
                            <div className="grid gap-2">
                                <Label>Maksimal summa</Label>
                                <Input type="number" value={formData.max_amount} onChange={(e) => setFormData({ ...formData, max_amount: Number(e.target.value) })} />
                            </div>
                            <div className="grid gap-2">
                                <Label>Foiz darajasi (%)</Label>
                                <Input type="number" value={formData.percent} onChange={(e) => setFormData({ ...formData, percent: Number(e.target.value) })} />
                            </div>
                            <div className="grid gap-2">
                                <Label>Muddat (oy)</Label>
                                <Input type="number" value={formData.lifetime ?? ""} onChange={(e) => setFormData({ ...formData, lifetime: e.target.value ? Number(e.target.value) : null })} />
                            </div>
                            <div className="grid gap-2">
                                <Label>Grats period (oy)</Label>
                                <Input type="number" value={formData.grace_period ?? ""} onChange={(e) => setFormData({ ...formData, grace_period: e.target.value ? Number(e.target.value) : null })} />
                            </div>
                        </div>
                        <DialogFooter>
                            <Button variant="outline" onClick={() => { setIsCreateOpen(false); resetForm(); }}>Bekor qilish</Button>
                            <Button onClick={handleCreate} disabled={createMutation.isPending}>
                                {createMutation.isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                Yaratish
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>

            <Tabs defaultValue="loans" className="space-y-4">
                <TabsList>
                    <TabsTrigger value="loans">Kreditlar ({loanProducts.length})</TabsTrigger>
                    <TabsTrigger value="cards">Kartalar ({cardProducts.length})</TabsTrigger>
                </TabsList>

                <TabsContent value="loans">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {loanProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                type="loan"
                                onEdit={handleEdit}
                                onDelete={(id) => { setDeletingId(id); setIsDeleteOpen(true); }}
                            />
                        ))}
                    </div>
                </TabsContent>

                <TabsContent value="cards">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {cardProducts.map((product) => (
                            <ProductCard key={product.id} product={product} type="card" />
                        ))}
                    </div>
                </TabsContent>
            </Tabs>

            {/* Edit Dialog */}
            <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Kreditni tahrirlash</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                            <Label>Ruscha nom</Label>
                            <Input value={formData.title_ru} onChange={(e) => setFormData({ ...formData, title_ru: e.target.value })} />
                        </div>
                        <div className="grid gap-2">
                            <Label>O'zbekcha nom</Label>
                            <Input value={formData.title_uz} onChange={(e) => setFormData({ ...formData, title_uz: e.target.value })} />
                        </div>
                        <div className="grid gap-2">
                            <Label>Inglizcha nom</Label>
                            <Input value={formData.title_en} onChange={(e) => setFormData({ ...formData, title_en: e.target.value })} />
                        </div>
                        <div className="grid gap-2">
                            <Label>Maksimal summa</Label>
                            <Input type="number" value={formData.max_amount} onChange={(e) => setFormData({ ...formData, max_amount: Number(e.target.value) })} />
                        </div>
                        <div className="grid gap-2">
                            <Label>Foiz darajasi (%)</Label>
                            <Input type="number" value={formData.percent} onChange={(e) => setFormData({ ...formData, percent: Number(e.target.value) })} />
                        </div>
                        <div className="grid gap-2">
                            <Label>Muddat (oy)</Label>
                            <Input type="number" value={formData.lifetime ?? ""} onChange={(e) => setFormData({ ...formData, lifetime: e.target.value ? Number(e.target.value) : null })} />
                        </div>
                        <div className="grid gap-2">
                            <Label>Grats period (oy)</Label>
                            <Input type="number" value={formData.grace_period ?? ""} onChange={(e) => setFormData({ ...formData, grace_period: e.target.value ? Number(e.target.value) : null })} />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => { setIsEditOpen(false); setEditingProduct(null); resetForm(); }}>Bekor qilish</Button>
                        <Button onClick={handleUpdate} disabled={updateMutation.isPending}>
                            {updateMutation.isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            Saqlash
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Delete Confirmation Dialog */}
            <Dialog open={isDeleteOpen} onOpenChange={setIsDeleteOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Kreditni o'chirish</DialogTitle>
                    </DialogHeader>
                    <p className="py-4">Bu kreditni o'chirmoqchimisiz? Bu amalni qaytarib bo'lmaydi.</p>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => { setIsDeleteOpen(false); setDeletingId(null); }}>Bekor qilish</Button>
                        <Button variant="destructive" onClick={handleDelete} disabled={deleteMutation.isPending}>
                            {deleteMutation.isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            O'chirish
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
};
