import React, { FC } from 'react';
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { RemoveNoteDialogProps } from '@/types/MyNotesType';



const RemoveNoteDialog: FC<RemoveNoteDialogProps> = ({
  open,
  onOpenChange,
  onRemove,
}) => (
  <AlertDialog open={open} onOpenChange={onOpenChange}>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle className='text-destructive'>Remove the note</AlertDialogTitle>
        <AlertDialogDescription className="text-inputFooterColor">
          This note will be moved to the bin. You can restore it later if needed.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel asChild>
          <Button variant="outline">Cancel</Button>
        </AlertDialogCancel>
        <AlertDialogAction asChild>
          <Button variant="destructive" className='bg-red-600 hover:bg-red-700' onClick={onRemove}>
            Remove
          </Button>
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export default RemoveNoteDialog;