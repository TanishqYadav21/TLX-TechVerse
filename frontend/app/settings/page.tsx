"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Camera,
  Check,
  CheckCircle2,
  ChevronRight,
  Database,
  Download,
  FileText,
  HelpCircle,
  Info,
  Mail,
  MessageCircle,
  ShieldCheck,
  Trash2,
  Upload,
  User,
  X,
} from "lucide-react";

type Section = "profile" | "data" | "privacy" | "help";

const PROFILE_PHOTO_KEY = "tlx-profile-photo";
const RESUME_DATA_KEY = "tlx-resume-data";

export default function SettingsPage() {
  const [activeSection, setActiveSection] =
    useState<Section>("profile");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState<string | null>(null);

  const [hasResume, setHasResume] = useState(false);
  const [saved, setSaved] = useState(false);
  const [photoSaving, setPhotoSaving] = useState(false);

  const fileInputRef =
    useRef<HTMLInputElement>(null);

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = () => {
    try {
      const savedData =
        localStorage.getItem(RESUME_DATA_KEY);

      if (savedData) {
        setHasResume(true);

        const parsed = JSON.parse(savedData);

        setName(
          parsed?.personal?.name ||
            parsed?.personalInfo?.name ||
            parsed?.name ||
            ""
        );

        setEmail(
          parsed?.personal?.email ||
            parsed?.personalInfo?.email ||
            parsed?.email ||
            ""
        );
      }

      const savedPhoto =
        localStorage.getItem(PROFILE_PHOTO_KEY);

      if (savedPhoto) {
        setPhoto(savedPhoto);
      }
    } catch (error) {
      console.error("Settings load error:", error);
    }
  };

  const showSaved = () => {
    setSaved(true);

    window.setTimeout(() => {
      setSaved(false);
    }, 1800);
  };

  /* ================= PROFILE ================= */

  const saveProfile = () => {
    try {
      const existing =
        localStorage.getItem(RESUME_DATA_KEY);

      if (existing) {
        const parsed = JSON.parse(existing);

        if (parsed.personal) {
          parsed.personal.name = name;
          parsed.personal.email = email;
        } else if (parsed.personalInfo) {
          parsed.personalInfo.name = name;
          parsed.personalInfo.email = email;
        } else {
          parsed.name = name;
          parsed.email = email;
        }

        localStorage.setItem(
          RESUME_DATA_KEY,
          JSON.stringify(parsed)
        );
      }

      showSaved();
    } catch (error) {
      console.error("Profile save error:", error);
    }
  };

  /* ================= PHOTO ================= */

  const handlePhotoChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile = event.target.files?.[0];

    if (!selectedFile) return;

    if (!selectedFile.type.startsWith("image/")) {
      alert("Please select an image file.");
      event.target.value = "";
      return;
    }

    if (selectedFile.size > 2 * 1024 * 1024) {
      alert("Profile photo must be smaller than 2 MB.");
      event.target.value = "";
      return;
    }

    setPhotoSaving(true);

    const reader = new FileReader();

    reader.onload = () => {
      const result = reader.result;

      if (typeof result !== "string") {
        setPhotoSaving(false);
        return;
      }

      try {
        localStorage.setItem(
          PROFILE_PHOTO_KEY,
          result
        );

        setPhoto(result);

        window.dispatchEvent(
          new Event("tlx-profile-photo-changed")
        );
      } catch (error) {
        console.error("Photo save error:", error);

        alert(
          "Unable to save this photo. Try a smaller image."
        );
      } finally {
        setPhotoSaving(false);
      }
    };

    reader.onerror = () => {
      setPhotoSaving(false);
      alert("Unable to read the selected image.");
    };

    reader.readAsDataURL(selectedFile);

    event.target.value = "";
  };

  const removePhoto = () => {
    const confirmed = window.confirm(
      "Remove your profile photo?"
    );

    if (!confirmed) return;

    localStorage.removeItem(PROFILE_PHOTO_KEY);

    setPhoto(null);

    window.dispatchEvent(
      new Event("tlx-profile-photo-changed")
    );

    showSaved();
  };

  /* ================= DATA ================= */

  const exportData = () => {
    const resumeData =
      localStorage.getItem(RESUME_DATA_KEY);

    const profilePhoto =
      localStorage.getItem(PROFILE_PHOTO_KEY);

    if (!resumeData && !profilePhoto) {
      alert("No saved data found.");
      return;
    }

    let parsedResume = null;

    try {
      parsedResume = resumeData
        ? JSON.parse(resumeData)
        : null;
    } catch {
      parsedResume = resumeData;
    }

    const backup = {
      resume: parsedResume,
      profilePhoto: profilePhoto || null,
      exportedAt: new Date().toISOString(),
    };

    const blob = new Blob(
      [JSON.stringify(backup, null, 2)],
      {
        type: "application/json",
      }
    );

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "tlx-resume-backup.json";

    document.body.appendChild(link);
    link.click();
    link.remove();

    URL.revokeObjectURL(url);

    showSaved();
  };

  const clearData = () => {
    const confirmed = window.confirm(
      "This will delete your saved resume data and profile photo from this browser. This action cannot be undone. Continue?"
    );

    if (!confirmed) return;

    localStorage.removeItem(RESUME_DATA_KEY);
    localStorage.removeItem(PROFILE_PHOTO_KEY);

    setName("");
    setEmail("");
    setPhoto(null);
    setHasResume(false);

    window.dispatchEvent(
      new Event("tlx-profile-photo-changed")
    );

    showSaved();
  };

  const initials =
    name
      .trim()
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((word) =>
        word.charAt(0).toUpperCase()
      )
      .join("") || "U";

  return (
    <main className="min-h-screen bg-[#f7f8fa] text-slate-900">

      {/* ================= TOPBAR ================= */}

      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-xl">

        <div className="mx-auto flex h-[68px] max-w-[1180px] items-center px-4 sm:px-6 lg:px-8">

          <div className="flex items-center gap-3">

            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm shadow-blue-600/20">
              <User size={18} />
            </div>

            <div>
              <p className="text-[15px] font-bold tracking-tight text-slate-900">
                Settings
              </p>

              <p className="text-[10px] font-medium text-slate-400">
                Manage your account & preferences
              </p>
            </div>

          </div>

        </div>

      </header>

      {/* ================= CONTENT ================= */}

      <div className="mx-auto max-w-[1180px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">

        <div className="grid gap-6 lg:grid-cols-[235px_minmax(0,1fr)]">

          {/* ================= SIDEBAR ================= */}

          <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">

            <p className="px-3 pb-2 pt-2 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
              Account
            </p>

            <SettingsNav
              active={activeSection === "profile"}
              icon={<User size={17} />}
              title="Profile"
              description="Personal information"
              onClick={() =>
                setActiveSection("profile")
              }
            />

            <p className="px-3 pb-2 pt-5 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
              Management
            </p>

            <SettingsNav
              active={activeSection === "data"}
              icon={<Database size={17} />}
              title="Data"
              description="Saved resume data"
              onClick={() =>
                setActiveSection("data")
              }
            />

            <SettingsNav
              active={activeSection === "privacy"}
              icon={<ShieldCheck size={17} />}
              title="Privacy"
              description="Data & privacy"
              onClick={() =>
                setActiveSection("privacy")
              }
            />

            <p className="px-3 pb-2 pt-5 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
              Support
            </p>

            <SettingsNav
              active={activeSection === "help"}
              icon={<HelpCircle size={17} />}
              title="Help & Support"
              description="Get help"
              onClick={() =>
                setActiveSection("help")
              }
            />

          </aside>

          {/* ================= MAIN PANEL ================= */}

          <section className="min-w-0">

            {activeSection === "profile" && (
              <ProfileSection
                name={name}
                email={email}
                photo={photo}
                initials={initials}
                photoSaving={photoSaving}
                fileInputRef={fileInputRef}
                setName={setName}
                setEmail={setEmail}
                onSave={saveProfile}
                onPhotoChange={handlePhotoChange}
                onRemovePhoto={removePhoto}
                hasResume={hasResume}
              />
            )}

            {activeSection === "data" && (
              <DataSection
                hasResume={hasResume}
                hasPhoto={Boolean(photo)}
                onExport={exportData}
                onClear={clearData}
              />
            )}

            {activeSection === "privacy" && (
              <PrivacySection />
            )}

            {activeSection === "help" && (
              <HelpSection />
            )}

          </section>

        </div>

      </div>

      {/* ================= SAVED TOAST ================= */}

      {saved && (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">

          <div className="flex items-center gap-2 rounded-xl border border-emerald-200 bg-white px-4 py-3 text-xs font-bold text-emerald-700 shadow-xl shadow-slate-900/10">

            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50">
              <Check size={14} />
            </span>

            Changes saved

          </div>

        </div>
      )}

    </main>
  );
}

/* =====================================================
   SETTINGS NAV
===================================================== */

function SettingsNav({
  active,
  icon,
  title,
  description,
  onClick,
}: {
  active: boolean;
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group mb-1 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition ${
        active
          ? "bg-blue-50 text-blue-700"
          : "text-slate-600 hover:bg-slate-50"
      }`}
    >

      <span
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
          active
            ? "bg-blue-600 text-white"
            : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
        }`}
      >
        {icon}
      </span>

      <span className="min-w-0 flex-1">

        <span className="block text-[13px] font-bold">
          {title}
        </span>

        <span className="mt-0.5 block truncate text-[10px] text-slate-400">
          {description}
        </span>

      </span>

      {active && (
        <ChevronRight
          size={14}
          className="text-blue-500"
        />
      )}

    </button>
  );
}

/* =====================================================
   PROFILE SECTION
===================================================== */

function ProfileSection({
  name,
  email,
  photo,
  initials,
  photoSaving,
  fileInputRef,
  setName,
  setEmail,
  onSave,
  onPhotoChange,
  onRemovePhoto,
  hasResume,
}: {
  name: string;
  email: string;
  photo: string | null;
  initials: string;
  photoSaving: boolean;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  setName: (value: string) => void;
  setEmail: (value: string) => void;
  onSave: () => void;
  onPhotoChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  onRemovePhoto: () => void;
  hasResume: boolean;
}) {
  return (
    <SettingsPanel
      icon={<User size={19} />}
      title="Profile"
      description="Manage the information and profile photo connected to your resume."
    >

      {/* PROFILE PHOTO */}

      <div className="border-b border-slate-100 pb-7">

        <div className="mb-5">
          <p className="text-sm font-bold text-slate-800">
            Profile photo
          </p>

          <p className="mt-1 text-xs text-slate-400">
            This photo appears on your dashboard profile icon.
          </p>
        </div>

        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

          <div className="relative">

            {photo ? (
              <img
                src={photo}
                alt="Profile"
                className="h-24 w-24 rounded-full border-4 border-white object-cover shadow-md ring-1 ring-slate-200"
              />
            ) : (
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 text-2xl font-bold text-white shadow-md">
                {initials}
              </div>
            )}

            <button
              type="button"
              onClick={() =>
                fileInputRef.current?.click()
              }
              disabled={photoSaving}
              className="absolute bottom-0 right-0 flex h-9 w-9 items-center justify-center rounded-full border-4 border-white bg-blue-600 text-white shadow-sm transition hover:bg-blue-700 disabled:opacity-60"
              title="Change photo"
            >
              <Camera size={15} />
            </button>

          </div>

          <div>

            <div className="flex flex-wrap gap-2">

              <button
                type="button"
                onClick={() =>
                  fileInputRef.current?.click()
                }
                disabled={photoSaving}
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-slate-800 disabled:opacity-50"
              >
                <Upload size={14} />

                {photoSaving
                  ? "Saving..."
                  : photo
                    ? "Change Photo"
                    : "Upload Photo"}
              </button>

              {photo && (
                <button
                  type="button"
                  onClick={onRemovePhoto}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-red-600 transition hover:bg-red-50"
                >
                  <X size={14} />
                  Remove
                </button>
              )}

            </div>

            <p className="mt-2 text-[11px] leading-5 text-slate-400">
              JPG, PNG or WebP · Maximum 2 MB
            </p>

          </div>

        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/png,image/jpeg,image/webp"
          onChange={onPhotoChange}
          className="hidden"
        />

      </div>

      {/* PERSONAL INFORMATION */}

      <div className="pt-7">

        <div className="mb-5">
          <p className="text-sm font-bold">
            Personal information
          </p>

          <p className="mt-1 text-xs text-slate-400">
            These details are connected to your saved resume.
          </p>
        </div>

        <div className="grid gap-5">

          <InputField
            label="Full Name"
            value={name}
            placeholder="Your full name"
            onChange={setName}
          />

          <InputField
            label="Email Address"
            value={email}
            placeholder="you@example.com"
            type="email"
            onChange={setEmail}
          />

        </div>

        {!hasResume && (
          <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs leading-5 text-amber-700">
            Create or save a resume first to connect profile information with your resume.
          </div>
        )}

        <div className="mt-7 flex justify-end border-t border-slate-100 pt-5">

          <button
            type="button"
            onClick={onSave}
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm shadow-blue-600/20 transition hover:bg-blue-700"
          >
            <Check size={16} />
            Save Changes
          </button>

        </div>

      </div>

    </SettingsPanel>
  );
}

/* =====================================================
   DATA SECTION
===================================================== */

function DataSection({
  hasResume,
  hasPhoto,
  onExport,
  onClear,
}: {
  hasResume: boolean;
  hasPhoto: boolean;
  onExport: () => void;
  onClear: () => void;
}) {
  return (
    <SettingsPanel
      icon={<Database size={19} />}
      title="Data"
      description="Manage the information saved locally by Resume Builder."
    >

      <div className="space-y-3">

        <DataRow
          icon={<FileText size={18} />}
          title="Resume data"
          description={
            hasResume
              ? "Your resume information is saved in this browser."
              : "No resume information is currently saved."
          }
          badge={hasResume ? "Available" : "Empty"}
          badgeClass={
            hasResume
              ? "bg-emerald-50 text-emerald-700"
              : "bg-slate-100 text-slate-500"
          }
        />

        <DataRow
          icon={<User size={18} />}
          title="Profile photo"
          description={
            hasPhoto
              ? "A profile photo is saved and connected to your dashboard."
              : "No profile photo is currently saved."
          }
          badge={hasPhoto ? "Saved" : "Not set"}
          badgeClass={
            hasPhoto
              ? "bg-emerald-50 text-emerald-700"
              : "bg-slate-100 text-slate-500"
          }
        />

        <DataRow
          icon={<Download size={18} />}
          title="Export backup"
          description="Download your resume and profile photo data as a backup file."
          button={
            <button
              type="button"
              disabled={!hasResume && !hasPhoto}
              onClick={onExport}
              className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Export
            </button>
          }
        />

        <div className="mt-6 border-t border-slate-100 pt-5">

          <p className="text-xs font-bold uppercase tracking-wider text-red-500">
            Danger Zone
          </p>

          <div className="mt-3 rounded-2xl border border-red-100 bg-red-50/50 p-4">

            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

              <div>
                <p className="text-sm font-bold text-slate-800">
                  Delete saved data
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Permanently remove your saved resume and profile photo from this browser.
                </p>
              </div>

              <button
                type="button"
                onClick={onClear}
                disabled={!hasResume && !hasPhoto}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-red-200 bg-white px-4 py-2.5 text-xs font-bold text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Trash2 size={14} />
                Delete Data
              </button>

            </div>

          </div>

        </div>

      </div>

    </SettingsPanel>
  );
}

/* =====================================================
   PRIVACY SECTION
===================================================== */

function PrivacySection() {
  return (
    <SettingsPanel
      icon={<ShieldCheck size={19} />}
      title="Privacy"
      description="Understand how your resume information is handled."
    >

      <div className="space-y-3">

        <PrivacyRow
          icon={<ShieldCheck size={18} />}
          title="Stored locally"
          description="Your current resume information is stored in your browser's local storage."
        />

        <PrivacyRow
          icon={<User size={18} />}
          title="Profile photo"
          description="Your selected profile photo is stored locally and used by the dashboard profile icon."
        />

        <PrivacyRow
          icon={<Database size={18} />}
          title="You control your data"
          description="You can export or delete your saved information whenever you want."
        />

        <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50 p-4">

          <div className="flex items-start gap-3">

            <Info
              size={18}
              className="mt-0.5 shrink-0 text-blue-600"
            />

            <div>

              <p className="text-sm font-bold text-blue-900">
                Privacy note
              </p>

              <p className="mt-1 text-xs leading-5 text-blue-700">
                Clearing your browser's site data may remove locally saved resume and profile information. Keep a backup if you need to preserve your work.
              </p>

            </div>

          </div>

        </div>

      </div>

    </SettingsPanel>
  );
}

/* =====================================================
   HELP SECTION
===================================================== */

function HelpSection() {
  return (
    <SettingsPanel
      icon={<HelpCircle size={19} />}
      title="Help & Support"
      description="Quick access to the main parts of your Resume Builder."
    >

      <div className="space-y-3">

        <HelpRow
          href="/"
          icon={<FileText size={18} />}
          title="Resume Builder"
          description="Create, edit and preview your resume."
        />

        <HelpRow
          href="/ats-analyzer"
          icon={<CheckCircle2 size={18} />}
          title="ATS Analyzer"
          description="Analyze your resume and get an estimated ATS score."
        />

        <div className="rounded-2xl border border-slate-200 p-4">

          <div className="flex items-start gap-3">

            <MessageCircle
              size={19}
              className="mt-0.5 shrink-0 text-blue-600"
            />

            <div>

              <p className="text-sm font-bold">
                Need help?
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                If something is not working, check the browser console and the terminal running your Next.js application for the exact error.
              </p>

            </div>

          </div>

        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">

          <div className="flex items-start gap-3">

            <Info
              size={19}
              className="mt-0.5 shrink-0 text-slate-500"
            />

            <div>

              <p className="text-sm font-bold">
                TLX TechVerse
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                Resume Builder and ATS Analyzer tools for creating and improving professional resumes.
              </p>

            </div>

          </div>

        </div>

      </div>

    </SettingsPanel>
  );
}

/* =====================================================
   COMMON PANEL
===================================================== */

function SettingsPanel({
  icon,
  title,
  description,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

      <div className="border-b border-slate-200 px-5 py-5 sm:px-7">

        <div className="flex items-start gap-3">

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            {icon}
          </div>

          <div>

            <h2 className="text-xl font-bold tracking-tight">
              {title}
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              {description}
            </p>

          </div>

        </div>

      </div>

      <div className="p-5 sm:p-7">
        {children}
      </div>

    </div>
  );
}

/* =====================================================
   INPUT FIELD
===================================================== */

function InputField({
  label,
  value,
  placeholder,
  type = "text",
  onChange,
}: {
  label: string;
  value: string;
  placeholder: string;
  type?: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">

      <span className="mb-2 block text-sm font-semibold text-slate-700">
        {label}
      </span>

      <div className="relative">

        {type === "email" && (
          <Mail
            size={16}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
          />
        )}

        <input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(event) =>
            onChange(event.target.value)
          }
          className={`w-full rounded-xl border border-slate-200 bg-white py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 ${
            type === "email"
              ? "pl-10 pr-4"
              : "px-4"
          }`}
        />

      </div>

    </label>
  );
}

/* =====================================================
   DATA ROW
===================================================== */

function DataRow({
  icon,
  title,
  description,
  badge,
  badgeClass,
  button,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge?: string;
  badgeClass?: string;
  button?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 p-4 sm:flex-row sm:items-center sm:justify-between">

      <div className="flex items-start gap-3">

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
          {icon}
        </div>

        <div>

          <p className="text-sm font-bold">
            {title}
          </p>

          <p className="mt-1 max-w-xl text-xs leading-5 text-slate-500">
            {description}
          </p>

        </div>

      </div>

      {badge && (
        <span
          className={`w-fit rounded-full px-3 py-1.5 text-[11px] font-bold ${badgeClass}`}
        >
          {badge}
        </span>
      )}

      {button}

    </div>
  );
}

/* =====================================================
   PRIVACY ROW
===================================================== */

function PrivacyRow({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-slate-200 p-4">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
        {icon}
      </div>

      <div>

        <p className="text-sm font-bold">
          {title}
        </p>

        <p className="mt-1 text-xs leading-5 text-slate-500">
          {description}
        </p>

      </div>

    </div>
  );
}

/* =====================================================
   HELP ROW
===================================================== */

function HelpRow({
  href,
  icon,
  title,
  description,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-3 rounded-2xl border border-slate-200 p-4 transition hover:border-blue-200 hover:bg-blue-50/40"
    >

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
        {icon}
      </div>

      <div className="min-w-0 flex-1">

        <p className="text-sm font-bold">
          {title}
        </p>

        <p className="mt-1 text-xs text-slate-500">
          {description}
        </p>

      </div>

      <ChevronRight
        size={17}
        className="shrink-0 text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-blue-500"
      />

    </Link>
  );
}