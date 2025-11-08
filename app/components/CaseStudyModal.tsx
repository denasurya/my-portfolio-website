'use client';

import React from 'react';
import { type Project } from '@/data/projectsData'; // Kita butuh 'cetakan' Project
import { motion } from 'framer-motion'; // Untuk animasi
import Image from 'next/image'; // Untuk foto bukti

// 1. Definisikan "cetakan" Props untuk Modal ini
interface CaseStudyModalProps {
  project: Project | null; // Proyek yang dipilih (atau null jika ditutup)
  onClose: () => void; // Fungsi untuk menutup modal
}
const getYouTubeEmbedUrl = (url: string | undefined) => {
  if (!url) return ""; // Jika URL tidak ada, kembalikan string kosong

  let videoId = '';
  
  if (url.includes("youtu.be/")) {
    // 1. Tangani link pendek (e.g., https://youtu.be/NqsunGeeeDY)
    videoId = url.split("youtu.be/")[1].split("?")[0];
  } else if (url.includes("watch?v=")) {
    // 2. Tangani link panjang (e.g., https://www.youtube.com/watch?v=NqsunGeeeDY)
    videoId = url.split("watch?v=")[1].split("&")[0];
  } else if (url.includes("/embed/")) {
    // 3. Jika sudah link embed (untuk jaga-jaga)
    videoId = url.split("/embed/")[1].split("?")[0];
  }

  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}`;
  }
  
  return url; // Kembalikan URL asli jika tidak dikenali
};
const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  
  // 2. Jika tidak ada proyek yang dipilih (project adalah null),
  // jangan tampilkan apa-apa (return null).
  if (!project) {
    return null; 
  }

  // 3. Ini adalah "kerangka" Modal kita
  // Jika project ADA (tidak null), tampilkan ini:
  return (
    // Ini adalah backdrop (latar belakang hitam transparan)
    // onClick={onClose} di sini agar bisa tutup modal dengan klik di luar kotak
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Ini adalah jendela (konten) Modal-nya */}
      {/* Kita tambahkan e.stopPropagation() agar saat klik di DALAM kotak, 
        modal-nya TIDAK ikut tertutup.
      */}
      <motion.div 
        className="bg-brand-dark rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
      >
        
        {/* --- Tombol Close (X) --- */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-brand-muted hover:text-white transition-colors"
          aria-label="Tutup Modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* 1. Header (Judul & Kategori) */}
        <h2 className="text-3xl font-bold text-brand-light mb-2">{project.title}</h2>
        <p className="text-lg text-brand-cyan mb-6">{project.category}</p>

        {/* 2. Cek apakah data caseStudy (amunisi kita) ada */}
        {project.caseStudy ? (
          // 3. Jika ADA, tampilkan isinya:
          <>
            {/* Bagian Cerita "The Why" */}
            <div 
          className="text-brand-muted mb-6 prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: project.caseStudy.story }} 
          />
            {/* --- Bagian Bukti Video --- */}
            <h3 className="text-xl font-semibold text-brand-light mt-6 mb-3">Bukti Video</h3>
            <div className="flex flex-col gap-6 mb-6">
              
              {/* Cek 1: Apakah ada Video Demo? */}
              {project.caseStudy.videoDemoUrl && (
                <div>
                  <h4 className="text-lg font-semibold text-brand-light mb-2">Video Demo Produk</h4>
                  {/* 'aspect-video' membuat video responsif 16:9 */}
                  <div className="aspect-video w-full">
                    <iframe 
                      src={getYouTubeEmbedUrl(project.caseStudy.videoDemoUrl)} 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                      className="w-full h-full rounded-md"
                      title="Video Demo Produk"
                    ></iframe>
                  </div>
                </div>
             )}

              {/* Cek 2: Apakah ada Video Testimoni? */}
              {project.caseStudy.videoTestimoniUrl && (
                <div>
                  <h4 className="text-lg font-semibold text-brand-light mb-2">Testimoni Pengguna</h4>
                  <div className="aspect-video w-full">
                    <iframe 
                      src={getYouTubeEmbedUrl(project.caseStudy.videoTestimoniUrl)} 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                      className="w-full h-full rounded-md"
                      title="Video Testimoni Pengguna"
                    ></iframe>
                  </div>
                </div>
              )}
            </div>
        {/* --- Bagian Bukti Lainnya (Gambar & Dokumen) --- */}
            <h3 className="text-xl font-semibold text-brand-light mt-6 mb-3">Bukti Lainnya (Gambar & Dokumen)</h3>

            {/* 1. Bukti Gambar Utama (Grafik / Badge AISOFOLL) */}
            {(project.caseStudy.graphImageUrl || project.caseStudy.announcementImageUrl) && (
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-brand-light mb-2">Bukti Kunci</h4>
                <Image
                  // Tampilkan Grafik JIKA ADA, jika tidak, tampilkan Badge AISOFOLL
                  src={project.caseStudy.graphImageUrl || project.caseStudy.announcementImageUrl!}
                  alt="Bukti Kunci Studi Kasus"
                  width={1920}
                  height={1080}
                  className="w-full h-auto rounded-md border border-gray-700"
                />
              </div>
            )}
            {(project.caseStudy.journalUrl || project.caseStudy.officialDocUrl) && (
              <div className="mt-6 mb-4"> {/* Kita beri jarak 'mt-6' dari galeri foto */}
                <h4 className="text-lg font-semibold text-brand-light mb-2">Dokumen Terkait</h4>
                <div className="flex flex-col gap-2">
                  
                  {/* Cek 1: Apakah ada Jurnal? */}
                  {project.caseStudy.journalUrl && (
                    <a 
                      href={project.caseStudy.journalUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-brand-cyan hover:text-brand-light transition-colors duration-300 underline font-medium"
                    >
                      Lihat Jurnal AISOFOLL (PDF)
                    </a>
                  )}
                  
                  {/* Cek 2: Apakah ada Surat Dinas? */}
                  {project.caseStudy.officialDocUrl && (
                    <a 
                      href={project.caseStudy.officialDocUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-brand-cyan hover:text-brand-light transition-colors duration-300 underline font-medium"
                    >
                      Lihat Surat Dinas (PDF)
                    </a>
                  )}
                  
                </div>
              </div>
            )}
            {/* 2. Galeri Foto (IHT / Acara AISOFOLL) */}
            {(project.caseStudy.ihtPhotoUrls || project.caseStudy.eventPhotoUrls) && (
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-brand-light mb-2">Galeri Foto</h4>
                <div className="flex flex-col gap-4">
                  {/* Gabungkan kedua array foto (jika ada) dan tampilkan */}
                  {[...(project.caseStudy.ihtPhotoUrls || []), ...(project.caseStudy.eventPhotoUrls || [])].map((url, index) => (
                    <Image
                      key={index}
                      src={url}
                      alt={`Foto Galeri ${index + 1}`}
                      width={400}
                      height={300}
                      className="w-full h-auto rounded-md border border-gray-700"
                    />
                  ))}
                </div>
              </div>
            )}

          </>
        ) : (
          // 4. Jika TIDAK ADA (sebagai penjaga)
          <p className="text-brand-muted">Data studi kasus untuk proyek ini tidak tersedia.</p>
        )}
        
      </motion.div>
    </motion.div>
  );
};

export default CaseStudyModal;