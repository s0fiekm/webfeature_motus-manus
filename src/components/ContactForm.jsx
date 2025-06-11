"use client";
import {useState} from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company_name: "",
    employees: "",
    interest: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

    const newErrors = {};
    if (!formData.name) newErrors.name = "Udfyld venligst navn";
    if (!formData.email) newErrors.email = "Udfyld venligst email";
    if (!formData.phone) newErrors.phone = "Udfyld venligst telefonnummer";
    if (!formData.company_name)
      newErrors.company_name = "Udfyld venligst virksomhedsnavn";
    if (!formData.employees) newErrors.employees = "Vælg antal ansatte";
    if (!formData.interest) newErrors.interest = "Vælg en interesse";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    setErrors({});

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    setLoading(false);

    if (res.ok) {
      setStatus("Tak for din besked! Vi vender tilbage hurtigst muligt.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company_name: "",
        employees: "",
        interest: "",
        message: "",
      });
    } else {
      setStatus(data.error || "Noget gik galt. Prøv igen.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 p-6">
      {/* Navn */}
      <div className="col-span-2 flex flex-col">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Navn"
          className={`border-b p-2 outline-none border-primary placeholder-primary placeholder-opacity-60${
            errors.name ? "border-error" : "border-primary"
          }`}
        />
        {errors.name && (
          <p className="text-sm text-error mt-1">*{errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div className="flex flex-col">
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className={`border-b p-2 outline-none border-primary placeholder-primary placeholder-opacity-60${
            errors.email ? "border-error" : "border-primary"
          }`}
        />
        {errors.email && (
          <p className="text-sm text-error mt-1">*{errors.email}</p>
        )}
      </div>

      {/* Telefon */}
      <div className="flex flex-col">
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Telefonnummer"
          className={`border-b p-2 outline-none border-primary placeholder-primary placeholder-opacity-60${
            errors.phone ? "border-error" : "border-primary"
          }`}
        />
        {errors.phone && (
          <p className="text-sm text-error mt-1">*{errors.phone}</p>
        )}
      </div>

      {/* Virksomhedsnavn */}
      <div className="col-span-2 flex flex-col">
        <input
          name="company_name"
          value={formData.company_name}
          onChange={handleChange}
          placeholder="Virksomhedsnavn"
          className={`border-b p-2 outline-none border-primary placeholder-primary placeholder-opacity-60${
            errors.company_name ? "border-error" : "border-primary"
          }`}
        />
        {errors.company_name && (
          <p className="text-sm text-error mt-1">*{errors.company_name}</p>
        )}
      </div>

      {/* Antal ansatte */}
      <div className="flex flex-col">
        <select
          name="employees"
          value={formData.employees}
          onChange={handleChange}
          className={`border-b p-2 outline-none border-primary text-primary ${
            errors.employees ? "border-error" : "border-primary"
          }`}
        >
          <option value="">Antal ansatte</option>
          <option value="1-5">1-5</option>
          <option value="6-10">6-10</option>
          <option value="11-25">11-25</option>
          <option value="26-50">26-50</option>
          <option value="51-100">51-100</option>
          <option value="100+">100+</option>
        </select>
        {errors.employees && (
          <p className="text-sm text-error mt-1">*{errors.employees}</p>
        )}
      </div>

      {/* Interesse */}
      <div className="flex flex-col">
        <select
          name="interest"
          value={formData.interest}
          onChange={handleChange}
          className={`border-b p-2 outline-none text-primary ${
            errors.interest ? "border-error" : "border-primary"
          }`}
        >
          <option value="">Primære interesse</option>
          <option value="Behandling">Behandling</option>
          <option value="Forebyggelse">Forebyggelse</option>
          <option value="Begge dele">Begge dele</option>
        </select>
        {errors.interest && (
          <p className="text-sm text-error mt-1">*{errors.interest}</p>
        )}
      </div>

      {/* Besked */}
      <div className="col-span-2 flex flex-col">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Besked"
          rows="4"
          className="border-b p-2 outline-none border-primary bg-transparent placeholder-primary"
        />
      </div>

      {/* Knap */}
      <div className="col-span-2 flex justify-end">
        <button
          type="submit"
          className="bg-cta text-secondary px-6 py-2 rounded-lg hover:opacity-90 transition"
          disabled={loading}
        >
          {loading ? "Sender..." : "Send besked"}
        </button>
      </div>

      {/* Statusbesked */}
      {status && (
        <p className="col-span-2 text-center text-sm text-primary mt-2">
          {status}
        </p>
      )}
    </form>
  );
}
