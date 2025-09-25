'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiCloseLine } from 'react-icons/ri';

interface Project {
  id: number;
  title: string;
  shortDescription: string;
  description: string;
  stack: string[];
  duration?: string;
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  if (!project) return null;
  if (!isOpen) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        backdropFilter: 'blur(4px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px'
      }}
      onClick={onClose}
    >
      <div 
        style={{
          backgroundColor: 'rgba(255,255,255,0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '16px',
          padding: '24px',
          width: '100%',
          maxWidth: '600px',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'rgba(255,255,255,0.7)',
            cursor: 'pointer',
            fontSize: '20px'
          }}
          onClick={onClose}
        >
          ×
        </button>

        {/* Header */}
        <div style={{ paddingRight: '48px', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '8px', color: 'white' }}>
            {project.title}
          </h2>
          {project.duration && (
            <span style={{
              display: 'inline-block',
              padding: '4px 12px',
              backgroundColor: 'rgba(255, 193, 7, 0.2)',
              color: '#FFC107',
              borderRadius: '16px',
              fontSize: '14px',
              fontWeight: '500'
            }}>
              {project.duration}
            </span>
          )}
        </div>

        {/* Short Description */}
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px', color: '#FFC107' }}>Overview</h3>
          <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.6' }}>
            {project.shortDescription}
          </p>
        </div>

        {/* Detailed Description */}
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px', color: '#FFC107' }}>Detailed Description</h3>
          <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.6' }}>
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div>
          <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: '#FFC107' }}>Technologies Used</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {project.stack.map((tech, index) => (
              <span
                key={index}
                style={{
                  padding: '8px 12px',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  border: '1px solid #FFC107',
                  color: 'rgba(255,255,255,0.9)',
                  borderRadius: '16px',
                  fontSize: '14px',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FFC107' }} />
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
